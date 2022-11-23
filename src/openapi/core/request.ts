/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import axios from 'axios';
import type { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios';
import FormData from 'form-data';

import { ApiError as CoreApiError } from './ApiError';
import type { ApiRequestOptions } from './ApiRequestOptions';
import type { ApiResult } from './ApiResult';
import { CancelablePromise } from './CancelablePromise';
import type { OnCancel } from './CancelablePromise';
import type { OpenAPIConfig } from './OpenAPI';
import { AuthService } from '../services/AuthService'
import AuthManager from '../../shared/authManager.js';
import { RefreshTokenRequest } from '../models/RefreshTokenRequest';
import { AuthenticationResult } from '../models/AuthenticationResult';

const isDefined = <T>(value: T | null | undefined): value is Exclude<T, null | undefined> => {
    return value !== undefined && value !== null;
};

const isString = (value: any): value is string => {
    return typeof value === 'string';
};

const isStringWithValue = (value: any): value is string => {
    return isString(value) && value !== '';
};

const isBlob = (value: any): value is Blob => {
    return (
        typeof value === 'object' &&
        typeof value.type === 'string' &&
        typeof value.stream === 'function' &&
        typeof value.arrayBuffer === 'function' &&
        typeof value.constructor === 'function' &&
        typeof value.constructor.name === 'string' &&
        /^(Blob|File)$/.test(value.constructor.name) &&
        /^(Blob|File)$/.test(value[Symbol.toStringTag])
    );
};

const isFormData = (value: any): value is FormData => {
    return value instanceof FormData;
};

const isSuccess = (status: number): boolean => {
    return status >= 200 && status < 300;
};

const base64 = (str: string): string => {
    try {
        return btoa(str);
    } catch (err) {
        // @ts-ignore
        return Buffer.from(str).toString('base64');
    }
};

const getQueryString = (params: Record<string, any>): string => {
    const qs: string[] = [];

    const append = (key: string, value: any) => {
        qs.push(`${encodeURIComponent(key)}=${encodeURIComponent(String(value))}`);
    };

    const process = (key: string, value: any) => {
        if (isDefined(value)) {
            if (Array.isArray(value)) {
                value.forEach(v => {
                    process(key, v);
                });
            } else if (typeof value === 'object') {
                Object.entries(value).forEach(([k, v]) => {
                    process(`${key}[${k}]`, v);
                });
            } else {
                append(key, value);
            }
        }
    };

    Object.entries(params).forEach(([key, value]) => {
        process(key, value);
    });

    if (qs.length > 0) {
        return `?${qs.join('&')}`;
    }

    return '';
};

const getUrl = (config: OpenAPIConfig, options: ApiRequestOptions): string => {
    const encoder = config.ENCODE_PATH || encodeURI;

    const path = options.url
        .replace('{api-version}', config.VERSION)
        .replace(/{(.*?)}/g, (substring: string, group: string) => {
            if (options.path?.hasOwnProperty(group)) {
                return encoder(String(options.path[group]));
            }
            return substring;
        });
    if (options.query) {
        return `${path}${getQueryString(options.query)}`;
    }
    return path;
};

const getFormData = (options: ApiRequestOptions): FormData | undefined => {
    if (options.formData) {
        const formData = new FormData();

        const process = (key: string, value: any) => {
            if (isString(value) || isBlob(value)) {
                formData.append(key, value);
            } else {
                formData.append(key, JSON.stringify(value));
            }
        };

        Object.entries(options.formData)
            .filter(([_, value]) => isDefined(value))
            .forEach(([key, value]) => {
                if (Array.isArray(value)) {
                    value.forEach(v => process(key, v));
                } else {
                    process(key, value);
                }
            });

        return formData;
    }
    return undefined;
};

type Resolver<T> = (options: ApiRequestOptions) => Promise<T>;

const resolve = async <T>(options: ApiRequestOptions, resolver?: T | Resolver<T>): Promise<T | undefined> => {
    if (typeof resolver === 'function') {
        return (resolver as Resolver<T>)(options);
    }
    return resolver;
};

const getHeaders = async (config: OpenAPIConfig, options: ApiRequestOptions, formData?: FormData): Promise<Record<string, string>> => {
    const apiKey = await resolve(options, config.APIKEY);    
    const token = await resolve(options, AuthManager.getInstance().getToken());
    const additionalHeaders = await resolve(options, config.HEADERS);
    const formHeaders = typeof formData?.getHeaders === 'function' && formData?.getHeaders() || {}

    const headers = Object.entries({
        Accept: 'application/json',
        ...additionalHeaders,
        ...options.headers,
        ...formHeaders,
    })
    .filter(([_, value]) => isDefined(value))
    .reduce((headers, [key, value]) => ({
        ...headers,
        [key]: String(value),
    }), {} as Record<string, string>);

    if (isStringWithValue(apiKey)) {        
        headers['apikey'] = apiKey;
    }        
    if (isStringWithValue(token)) {
        headers['Authorization'] = `Bearer ${token}`;        
    }

    if (options.body) {
        if (options.mediaType) {
            headers['Content-Type'] = options.mediaType;
        } else if (isBlob(options.body)) {
            headers['Content-Type'] = options.body.type || 'application/octet-stream';
        } else if (isString(options.body)) {
            headers['Content-Type'] = 'text/plain';
        } else if (!isFormData(options.body)) {
            headers['Content-Type'] = 'application/json';
        }
    }

    return headers;
};

const getRequestBody = (options: ApiRequestOptions): any => {
    if (options.body) {
        return options.body;
    }
    return undefined;
};

const sendRequest = async <T>(
    config: OpenAPIConfig,
    options: ApiRequestOptions,
    url: string,
    body: any,
    formData: FormData | undefined,
    headers: Record<string, string>,
    onCancel: OnCancel
): Promise<AxiosResponse<T>> => {
    const source = axios.CancelToken.source();

    const requestConfig: AxiosRequestConfig = {
        url: `${config.BASE}${url}`,
        headers,
        data: body ?? formData,
        method: options.method,
        withCredentials: config.WITH_CREDENTIALS,
        cancelToken: source.token,
    };

    onCancel(() => source.cancel('The user aborted a request.'));

    try {
        return await axios.request(requestConfig);
    } catch (error) {
        const axiosError = error as AxiosError<T>;
        if (axiosError.response) {
            return axiosError.response;
        }
        throw error;
    }
};

const getResponseHeader = (response: AxiosResponse<any>, responseHeader?: string): string | undefined => {
    if (responseHeader) {
        const content = response.headers[responseHeader];
        if (isString(content)) {
            return content;
        }
    }
    return undefined;
};

const getResponseBody = (response: AxiosResponse<any>): any => {
    if (response.status !== 204) {
        return response.data;
    }
    return undefined;
};

const tryToRefreshToken = async (config: OpenAPIConfig) => {
    
    const apiOptions: ApiRequestOptions= {
        method: 'POST',
        url: '/refreshToken',
        body: {
            token: AuthManager.getInstance().getToken(),
            refreshToken: AuthManager.getInstance().getRefreshToken()
        },
        mediaType: 'application/json-patch+json',
        errors: {
            400: `Bad Request`,
            401: `Unauthorized. The request requires authentication. The OAuth bearer token was either not provided or is invalid.`,
            403: `Forbidden. The request cannot be completed in the current authorization context.`,
            409: `Conflict. The request cannot be completed because it would result in an invalid state. See the response body for details.`,
            412: `The resource's current server-side ETag value does not match the supplied If-Match header value in the request. This indicates the resource has been modified by another consumer.`,
            500: `Unhandled error. An unhandled error occurred on the server. See the response body for details.`,
        },
    };
            
    await request(config, apiOptions)
}

const catchErrorCodes = (options: ApiRequestOptions, result: ApiResult): void => {
    const errors: Record<number, string> = {
        400: 'Bad Request',
        401: 'Unauthorized',
        403: 'Forbidden',
        404: 'Not Found',
        500: 'Internal Server Error',
        502: 'Bad Gateway',
        503: 'Service Unavailable',
        ...options.errors,
    }

    const error = errors[result.status];
    if (error) {
        throw new CoreApiError(options, result, error);
    }

    if (!result.ok) {
        throw new CoreApiError(options, result, 'Generic Error');
    }
};

/**
 * Request method
 * @param config The OpenAPI configuration object
 * @param options The request options from the service
 * @returns CancelablePromise<T>
 * @throws CoreApiError
 */
export const request = <T>(config: OpenAPIConfig, options: ApiRequestOptions): CancelablePromise<T> => {
    return new CancelablePromise(async (resolve, reject, onCancel) => {
        let absoluteUrl = '';
        try {
            const url = getUrl(config, options);            
            const formData = getFormData(options);
            const body = getRequestBody(options);
            const headers = await getHeaders(config, options, formData);
            absoluteUrl = url;

            if (!onCancel.isCancelled) {
                const response = await sendRequest<T>(config, options, url, body, formData, headers, onCancel);
                const responseBody = getResponseBody(response);
                const responseHeader = getResponseHeader(response, options.responseHeader);

                const result: ApiResult = {
                    url,
                    ok: isSuccess(response.status),
                    status: response.status,
                    statusText: response.statusText,
                    body: responseHeader ?? responseBody,
                };                

                catchErrorCodes(options, result);
                resolve(result.body);

                if (!AuthManager.getInstance().getIsValid() && url === '/refreshToken') {
                    const authResult: AuthenticationResult = response.data;
                    AuthManager.getInstance().setIsValid(true);
                    AuthManager.getInstance().setToken(authResult.token);
                    AuthManager.getInstance().setRefreshToken(authResult.refreshToken);
                }
                
                AuthManager.getInstance().setHistory(absoluteUrl.split('?')[0]);
            }
        } catch (error: any) {
            // user authenticaded and token was expired
            if (error.toString().includes('Unauthorized')) {
                try {                    
                    AuthManager.getInstance().setHistory(absoluteUrl.split('?')[0]);
                    AuthManager.getInstance().setIsValid(false);
                    await tryToRefreshToken(config);
                }
                catch (e) {
                    reject({ 'error': 'token error' });
                }
                
            }
            else {
                reject(error);
            }            
        }
    });
};

