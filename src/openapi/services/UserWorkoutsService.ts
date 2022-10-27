/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { UserWorkout } from '../models/UserWorkout';
import type { UserWorkoutPostQuery } from '../models/UserWorkoutPostQuery';
import type { UserWorkoutPutQuery } from '../models/UserWorkoutPutQuery';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class UserWorkoutsService {

    /**
     * Returns all user workouts
     * @param userId 
     * @param offset The number of items to skip before starting to collect the result set
     * @param limit The number of items to return
     * @returns UserWorkout The requested resource was successfully retrieved.
     * @throws ApiError
     */
    public static getUserWorkouts(
userId: number,
offset?: number,
limit?: number,
): CancelablePromise<Array<UserWorkout>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/userWorkouts',
            query: {
                'userId': userId,
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
     * Add a new user workout
     * @param requestBody 
     * @returns UserWorkout Updated. The resource was updated.
     * @returns any Created. The resource was created.
     * @throws ApiError
     */
    public static postUserWorkouts(
requestBody?: UserWorkoutPostQuery,
): CancelablePromise<UserWorkout | any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/userWorkouts',
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
     * Delete an existing machine using the identifier
     * @param userWorkoutId An identifier that uniquely identifies the user workout.
     * @param ifMatch The ETag header value used to prevent the DELETE from removing a resource modified by another consumer.
     * @returns void 
     * @throws ApiError
     */
    public static deleteUserWorkouts(
userWorkoutId: string,
ifMatch?: string,
): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/userWorkouts/{userWorkoutId}',
            path: {
                'userWorkoutId': userWorkoutId,
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
     * Updates a user workout based on the identifier
     * @param userWorkoutId An identifier that uniquely identifies the user workout.
     * @param ifMatch The ETag header value used to prevent the PUT from updating a resource modified by another consumer.
     * @param requestBody 
     * @returns void 
     * @throws ApiError
     */
    public static putUserWorkouts(
userWorkoutId: string,
ifMatch?: string,
requestBody?: UserWorkoutPutQuery,
): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/userWorkouts/{userWorkoutId}',
            path: {
                'userWorkoutId': userWorkoutId,
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
