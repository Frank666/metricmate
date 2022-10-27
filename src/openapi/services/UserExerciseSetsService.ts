/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { UserExerciseSet } from '../models/UserExerciseSet';
import type { UserExerciseSetPostQuery } from '../models/UserExerciseSetPostQuery';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class UserExerciseSetsService {

    /**
     * Returns all user exercise sets
     * @param userId Numeric ID of the user
     * @param userWorkoutId Numeric ID of the user workout
     * @param offset The number of items to skip before starting to collect the result set
     * @param limit The number of items to return
     * @returns UserExerciseSet The requested resource was successfully retrieved.
     * @throws ApiError
     */
    public static getUserExerciseSets(
userId?: number,
userWorkoutId?: number,
offset?: number,
limit?: number,
): CancelablePromise<Array<UserExerciseSet>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/userExerciseSets',
            query: {
                'userId': userId,
                'userWorkoutId': userWorkoutId,
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
     * Add a new user exercise set
     * @param requestBody 
     * @returns UserExerciseSet Updated. The resource was updated.
     * @returns any Created. The resource was created.
     * @throws ApiError
     */
    public static postUserExerciseSets(
requestBody?: UserExerciseSetPostQuery,
): CancelablePromise<UserExerciseSet | any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/userExerciseSets',
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
     * Delete an existing user exercise set using the identifier
     * @param userExerciseSetId An identifier that uniquely identifies the user exercise set.
     * @param ifMatch The ETag header value used to prevent the DELETE from removing a resource modified by another consumer.
     * @returns void 
     * @throws ApiError
     */
    public static deleteUserExerciseSets(
userExerciseSetId: string,
ifMatch?: string,
): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/userExerciseSets/{userExerciseSetId}',
            path: {
                'userExerciseSetId': userExerciseSetId,
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
     * Updates a user exercise set based on the identifier
     * @param userExerciseSetId An identifier that uniquely identifies the user exercise set.
     * @param ifMatch The ETag header value used to prevent the PUT from updating a resource modified by another consumer.
     * @param requestBody 
     * @returns void 
     * @throws ApiError
     */
    public static putUserExerciseSets(
userExerciseSetId: string,
ifMatch?: string,
requestBody?: UserExerciseSet,
): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/userExerciseSets/{userExerciseSetId}',
            path: {
                'userExerciseSetId': userExerciseSetId,
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
