/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Program } from '../models/Program';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class ProgramsService {

    /**
     * Retrieves specific workout program using the program's property values (using the "Get" pattern).
     * @param offset The number of items to skip before starting to collect the result set
     * @param limit The number of items to return
     * @param name 
     * @param isActive Whether the program is active
     * @returns Program The requested resource was successfully retrieved.
     * @throws ApiError
     */
    public static getPrograms(
offset?: number,
limit?: number,
name?: string,
isActive?: boolean,
): CancelablePromise<Array<Program>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/programs',
            query: {
                'offset': offset,
                'limit': limit,
                'name': name,
                'isActive': isActive,
            },
            errors: {
                400: `Bad Request`,
                401: `Unauthorized. The request requires authentication. The OAuth bearer token was either not provided or is invalid.`,
                403: `Forbidden. The request cannot be completed in the current authorization context.`,
                404: `Not Found. The resource could not be found.`,
                500: `Unhandled error. An unhandled error occurred on the server. See the response body for details.`,
            },
        });
    }

    /**
     * Add a new program
     * @param requestBody 
     * @returns any Updated. The resource was updated.
     * @throws ApiError
     */
    public static postPrograms(
requestBody: Program,
): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/programs',
            body: requestBody,
            mediaType: 'application/json',
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
     * Returns a program by ID.
     * @param programId An identifier that uniquely identifies the program.
     * @returns Program The requested resource was successfully retrieved.
     * @throws ApiError
     */
    public static getPrograms1(
programId: string,
): CancelablePromise<Program> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/programs/{programId}',
            path: {
                'programId': programId,
            },
            errors: {
                400: `Bad Request`,
                401: `Unauthorized. The request requires authentication. The OAuth bearer token was either not provided or is invalid.`,
                403: `Forbidden. The request cannot be completed in the current authorization context.`,
                404: `Not Found. The resource could not be found.`,
                500: `Unhandled error. An unhandled error occurred on the server. See the response body for details.`,
            },
        });
    }

    /**
     * Updates a program based on the identifier
     * @param programId An identifier that uniquely identifies the program.
     * @param requestBody 
     * @param ifMatch The ETag header value used to prevent the PUT from updating a resource modified by another consumer.
     * @returns void 
     * @throws ApiError
     */
    public static putPrograms(
programId: string,
requestBody: Program,
ifMatch?: string,
): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/programs/{programId}',
            path: {
                'programId': programId,
            },
            headers: {
                'If-Match': ifMatch,
            },
            body: requestBody,
            mediaType: 'application/json',
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
     * Delete an existing program using the identifier
     * @param programId An identifier that uniquely identifies the program.
     * @param ifMatch The ETag header value used to prevent the DELETE from removing a resource modified by another consumer.
     * @returns void 
     * @throws ApiError
     */
    public static deletePrograms(
programId: string,
ifMatch?: string,
): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/programs/{programId}',
            path: {
                'programId': programId,
            },
            headers: {
                'If-Match': ifMatch,
            },
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
