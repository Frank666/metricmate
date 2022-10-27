/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ProgramSchedule } from '../models/ProgramSchedule';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class ProgramSchedulesService {

    /**
     * Retrieves specific workout program using the program's property values (using the \"Get\" pattern).
     * @param offset The number of items to skip before starting to collect the result set
     * @param limit The number of items to return
     * @param name 
     * @param isActive Whether the program is active
     * @returns ProgramSchedule The requested resource was successfully retrieved.
     * @throws ApiError
     */
    public static getProgramSchedules(
offset?: number,
limit?: number,
name?: string,
isActive?: boolean,
): CancelablePromise<Array<ProgramSchedule>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/programSchedules',
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
    public static postProgramSchedules(
requestBody?: ProgramSchedule,
): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/programSchedules',
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
     * Delete an existing program using the identifier
     * @param programScheduleId An identifier that uniquely identifies the program.
     * @param ifMatch The ETag header value used to prevent the DELETE from removing a resource modified by another consumer.
     * @returns void 
     * @throws ApiError
     */
    public static deleteProgramSchedules(
programScheduleId: string,
ifMatch?: string,
): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/programSchedules/{programScheduleId}',
            path: {
                'programScheduleId': programScheduleId,
            },
            headers: {
                'ifMatch': ifMatch,
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

    /**
     * Returns a program by ID.
     * @param programScheduleId An identifier that uniquely identifies the program.
     * @returns ProgramSchedule The requested resource was successfully retrieved.
     * @throws ApiError
     */
    public static getProgramSchedules1(
programScheduleId: string,
): CancelablePromise<ProgramSchedule> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/programSchedules/{programScheduleId}',
            path: {
                'programScheduleId': programScheduleId,
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
     * @param programScheduleId An identifier that uniquely identifies the program.
     * @param ifMatch The ETag header value used to prevent the PUT from updating a resource modified by another consumer.
     * @param requestBody 
     * @returns void 
     * @throws ApiError
     */
    public static putProgramSchedules(
programScheduleId: string,
ifMatch?: string,
requestBody?: ProgramSchedule,
): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/programSchedules/{programScheduleId}',
            path: {
                'programScheduleId': programScheduleId,
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
