/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Role } from '../models/Role';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class RolesService {

    /**
     * Retrieve a list of roles
     * @param offset The number of items to skip before starting to collect the result set
     * @param limit The number of items to return
     * @returns Role The requested resource was successfully retrieved.
     * @throws ApiError
     */
    public static getRoles(
offset?: number,
limit?: number,
): CancelablePromise<Array<Role>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/roles',
            query: {
                'offset': offset,
                'limit': limit,
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
     * Get a role by ID
     * @param roleId An identifier that uniquely identifies the role.
     * @param ifMatch The ETag header value used to prevent the PUT from updating a resource modified by another consumer.
     * @returns Role The requested resource was successfully retrieved.
     * @throws ApiError
     */
    public static getRoles1(
roleId: string,
ifMatch?: string,
): CancelablePromise<Role> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/roles/{roleId}',
            path: {
                'roleId': roleId,
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

}
