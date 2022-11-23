/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Athlete } from '../models/Athlete';
import type { User } from '../models/User';
import type { Workout } from '../models/Workout';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class TrainersService {

    /**
     * Retrieve a list of trainers
     * @param offset The number of items to skip before starting to collect the result set
     * @param limit The number of items to return
     * @returns User The requested resource was successfully retrieved.
     * @throws ApiError
     */
    public static getTrainers(
offset?: number,
limit?: number,
): CancelablePromise<Array<User>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/trainers',
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
     * Retrieve a list of trainers
     * @param trainerId 
     * @returns User The requested resource was successfully retrieved.
     * @throws ApiError
     */
    public static getTrainerById(
trainerId: number,
): CancelablePromise<Array<User>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/trainerById',
            query: {
                'trainerId': trainerId,
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
     * Get a trainer by ID
     * @param userId An identifier that uniquely identifies the trainer.
     * @param ifMatch The ETag header value used to prevent the PUT from updating a resource modified by another consumer.
     * @returns User The requested resource was successfully retrieved.
     * @throws ApiError
     */
    public static getTrainers1(
userId: number,
ifMatch?: string,
): CancelablePromise<User> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/trainers/{userId}',
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
     * Returns every athlete assigned to the provided trainer
     * @param trainerId 
     * @param offset The number of items to skip before starting to collect the result set
     * @param limit The number of items to return
     * @returns Athlete The requested resource was successfully retrieved.
     * @throws ApiError
     */
    public static getTrainerAthletes(
trainerId: number,
offset?: number,
limit?: number,
): CancelablePromise<Array<Athlete>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/trainerAthletes',
            query: {
                'trainerId': trainerId,
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
     * Returns every workout created by the provided trainer
     * @param trainerId 
     * @param offset The number of items to skip before starting to collect the result set
     * @param limit The number of items to return
     * @returns Workout The requested resource was successfully retrieved.
     * @throws ApiError
     */
    public static getTrainerCreatedWorkouts(
trainerId: number,
offset?: number,
limit?: number,
): CancelablePromise<Array<Workout>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/trainerCreatedWorkouts',
            query: {
                'trainerId': trainerId,
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
     * Add a new workout created by the provided trainer
     * @param trainerId An identifier that uniquely identifies the trainer.
     * @param requestBody The workout to be saved.
     * @returns Workout The requested resource was successfully retrieved.
     * @throws ApiError
     */
    public static postTrainerCreatedWorkouts(
trainerId: number,
requestBody?: Workout,
): CancelablePromise<Workout> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/trainerCreatedWorkouts',
            query: {
                'trainerId': trainerId,
            },
            body: requestBody,
            mediaType: 'application/json-patch+json',
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
