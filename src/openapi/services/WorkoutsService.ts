/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { MuscleGroup } from '../models/MuscleGroup';
import type { Workout } from '../models/Workout';
import type { WorkoutPutQuery } from '../models/WorkoutPutQuery';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class WorkoutsService {

    /**
     * Retrieve workouts
     * @param offset The number of items to skip before starting to collect the result set
     * @param limit The number of items to return
     * @param workoutName Name of workout
     * @param intensity intensity (LOW, MED, or HIGH)
     * @param durationMin Workout duration minimum (non-inclusive)
     * @param durationMax Workout duration maximum (non-inclusive)
     * @param muscleGroups List of muscle groups
     * @returns Workout The requested resource was successfully retrieved.
     * @throws ApiError
     */
    public static getWorkouts(
offset?: number,
limit?: number,
workoutName?: string,
intensity?: string,
durationMin?: number,
durationMax?: number,
muscleGroups?: Array<MuscleGroup>,
): CancelablePromise<Array<Workout>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/workouts',
            query: {
                'offset': offset,
                'limit': limit,
                'workoutName': workoutName,
                'intensity': intensity,
                'durationMin': durationMin,
                'durationMax': durationMax,
                'muscleGroups': muscleGroups,
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
     * Add a new workout
     * @param requestBody 
     * @returns any Updated. The resource was updated.
     * @throws ApiError
     */
    public static postWorkouts(
requestBody?: Workout,
): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/workouts',
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
     * Delete an existing workout using the identifier
     * @param workoutId 
     * @param ifMatch The ETag header value used to prevent the DELETE from removing a resource modified by another consumer.
     * @returns void 
     * @throws ApiError
     */
    public static deleteWorkouts(
workoutId: string,
ifMatch?: string,
): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/workouts/{workoutId}',
            path: {
                'workoutId': workoutId,
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
     * Retrieve workout using Id.
     * @param workoutId 
     * @param ifMatch The ETag header value used to prevent the PUT from updating a resource modified by another consumer.
     * @returns Workout The requested resource was successfully retrieved.
     * @throws ApiError
     */
    public static getWorkouts1(
workoutId: string,
ifMatch?: string,
): CancelablePromise<Workout> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/workouts/{workoutId}',
            path: {
                'workoutId': workoutId,
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
     * Updates a workout based on the identifier
     * @param workoutId 
     * @param ifMatch The ETag header value used to prevent the PUT from updating a resource modified by another consumer.
     * @param requestBody 
     * @returns void 
     * @throws ApiError
     */
    public static putWorkouts(
workoutId: string,
ifMatch?: string,
requestBody?: WorkoutPutQuery,
): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/workouts/{workoutId}',
            path: {
                'workoutId': workoutId,
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
