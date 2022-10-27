/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AuthenticationQuery } from '../models/AuthenticationQuery';
import type { AuthenticationResult } from '../models/AuthenticationResult';
import type { RefreshTokenRequest } from '../models/RefreshTokenRequest';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class AuthService {

    /**
     * Authorize a new user
     * @param requestBody 
     * @returns AuthenticationResult The user model and authorization token
     * @throws ApiError
     */
    public static postAuthorize(
requestBody?: AuthenticationQuery,
): CancelablePromise<AuthenticationResult> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/authorize',
            body: requestBody,
            mediaType: 'application/json-patch+json',
            errors: {
                400: `Bad Request`,
                401: `Unauthorized. The request requires authentication. The OAuth bearer token was either not provided or is invalid.`,
                403: `Forbidden. The request cannot be completed in the current authorization context.`,
                409: `Conflict. The request cannot be completed because it would result in an invalid state. See the response body for details.`,
                412: `The resource's current server-side ETag value does not match the supplied If-Match header value in the request. This indicates the resource has been modified by another consumer.`,
                500: `Unhandled error. An unhandled error occurred on the server. See the response body for details.`,
            },
        });
    }

    /**
     * @param email 
     * @returns AuthenticationResult Success
     * @throws ApiError
     */
    public static getAuthorize(
email?: string,
): CancelablePromise<AuthenticationResult> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/authorize',
            query: {
                'email': email,
            },
            errors: {
                400: `Bad Request`,
                500: `Server Error`,
            },
        });
    }

    /**
     * Refresh an expired token for a user
     * @param requestBody 
     * @returns AuthenticationResult The user model and authorization token
     * @throws ApiError
     */
    public static postRefreshToken(
requestBody?: RefreshTokenRequest,
): CancelablePromise<AuthenticationResult> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/refreshToken',
            body: requestBody,
            mediaType: 'application/json-patch+json',
            errors: {
                400: `Bad Request`,
                401: `Unauthorized. The request requires authentication. The OAuth bearer token was either not provided or is invalid.`,
                403: `Forbidden. The request cannot be completed in the current authorization context.`,
                409: `Conflict. The request cannot be completed because it would result in an invalid state. See the response body for details.`,
                412: `The resource's current server-side ETag value does not match the supplied If-Match header value in the request. This indicates the resource has been modified by another consumer.`,
                500: `Unhandled error. An unhandled error occurred on the server. See the response body for details.`,
            },
        });
    }

}
