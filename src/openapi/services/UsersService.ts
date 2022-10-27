/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { RegisterQuery } from '../models/RegisterQuery';
import type { User } from '../models/User';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class UsersService {

    /**
     * Retrieve a list of users
     * @param offset The number of items to skip before starting to collect the result set
     * @param limit The number of items to return
     * @param name The user's name.
     * @param email The user's email.
     * @param roleId The role assigned to the user.
     * @returns User The requested resource was successfully retrieved.
     * @throws ApiError
     */
    public static getUsers(
offset?: number,
limit?: number,
name?: string,
email?: string,
roleId?: number,
): CancelablePromise<Array<User>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/users',
            query: {
                'offset': offset,
                'limit': limit,
                'name': name,
                'email': email,
                'roleId': roleId,
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
     * Add a new user
     * @param requestBody 
     * @returns any Updated. The resource was updated.
     * @throws ApiError
     */
    public static postUsers(
requestBody?: RegisterQuery,
): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/users',
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
     * Returns a user by ID.
     * @param userId An identifier that uniquely identifies the user.
     * @param ifMatch The ETag header value used to prevent the PUT from updating a resource modified by another consumer.
     * @returns User The requested resource was successfully retrieved.
     * @throws ApiError
     */
    public static getUsers1(
userId: string,
ifMatch?: string,
): CancelablePromise<User> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/users/{userId}',
            path: {
                'userId': userId,
            },
            headers: {
                'ifMatch': ifMatch,
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
     * Updates a user based on the identifier
     * @param userId An identifier that uniquely identifies the user.
     * @param ifMatch The ETag header value used to prevent the PUT from updating a resource modified by another consumer.
     * @param requestBody 
     * @returns void 
     * @throws ApiError
     */
    public static putUsers(
userId: string,
ifMatch?: string,
requestBody?: User,
): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/users/{userId}',
            path: {
                'userId': userId,
            },
            headers: {
                'ifMatch': ifMatch,
            },
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
