/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Exercise } from '../models/Exercise';
import type { ExerciseSet } from '../models/ExerciseSet';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class ExerciseSetsService {

    /**
     * Returns all exercise sets
     * @param offset The number of items to skip before starting to collect the result set
     * @param limit The number of items to return
     * @param exercise The exercise to which the set belongs.
     * @returns ExerciseSet The requested resource was successfully retrieved.
     * @throws ApiError
     */
    public static getExerciseSets(
offset?: number,
limit?: number,
exercise?: Exercise,
): CancelablePromise<Array<ExerciseSet>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/exerciseSets',
            query: {
                'offset': offset,
                'limit': limit,
                'exercise': exercise,
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
     * Add a new exercise set
     * @param requestBody 
     * @returns any Updated. The resource was updated.
     * @throws ApiError
     */
    public static postExerciseSets(
requestBody: ExerciseSet,
): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/exerciseSets',
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
     * Get an exercise by ID
     * @param exerciseSetId An identifier that uniquely identifies the exercise set.
     * @param ifMatch The ETag header value used to prevent the PUT from updating a resource modified by another consumer.
     * @returns ExerciseSet The requested resource was successfully retrieved.
     * @throws ApiError
     */
    public static getExerciseSets1(
exerciseSetId: number,
ifMatch?: string,
): CancelablePromise<ExerciseSet> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/exerciseSets/{exerciseSetId}',
            path: {
                'exerciseSetId': exerciseSetId,
            },
            headers: {
                'If-Match': ifMatch,
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
     * Updates a exercise set based on the identifier
     * @param exerciseSetId An identifier that uniquely identifies the exercise set.
     * @param requestBody 
     * @param ifMatch The ETag header value used to prevent the PUT from updating a resource modified by another consumer.
     * @returns void 
     * @throws ApiError
     */
    public static putExerciseSets(
exerciseSetId: number,
requestBody: ExerciseSet,
ifMatch?: string,
): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/exerciseSets/{exerciseSetId}',
            path: {
                'exerciseSetId': exerciseSetId,
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
     * Delete an existing exercise set using the identifier
     * @param exerciseSetId An identifier that uniquely identifies the exercise set.
     * @param ifMatch The ETag header value used to prevent the DELETE from removing a resource modified by another consumer.
     * @returns void 
     * @throws ApiError
     */
    public static deleteExerciseSets(
exerciseSetId: number,
ifMatch?: string,
): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/exerciseSets/{exerciseSetId}',
            path: {
                'exerciseSetId': exerciseSetId,
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
