/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Athlete } from '../models/Athlete';
import type { UserExerciseSet } from '../models/UserExerciseSet';
import type { UserWorkout } from '../models/UserWorkout';
import type { Workout } from '../models/Workout';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class AthletesApiService {

    /**
     * Returns workouts done by the provided athlete
     * @param trainerId Numeric ID of the requesting trainer
     * @param athleteId Numeric ID of the athlete
     * @param offset The number of items to skip before starting to collect the result set
     * @param limit The number of items to return
     * @returns UserWorkout The requested resource was successfully retrieved.
     * @throws ApiError
     */
    public static getAthleteCompletedWorkouts(
trainerId: number,
athleteId: number,
offset?: number,
limit?: number,
): CancelablePromise<Array<UserWorkout>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/athleteCompletedWorkouts',
            query: {
                'trainerId': trainerId,
                'athleteId': athleteId,
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
     * Returns exercise sets done by the provided athlete
     * @param trainerId Numeric ID of the requesting trainer
     * @param athleteId Numeric ID of the athlete
     * @param athleteWorkoutId Numeric ID of the athlete workout
     * @param exerciseId Numeric ID of an exercise
     * @param offset The number of items to skip before starting to collect the result set
     * @param limit The number of items to return
     * @returns UserExerciseSet The requested resource was successfully retrieved.
     * @throws ApiError
     */
    public static getAthleteCompletedExerciseSets(
trainerId: number,
athleteId: number,
athleteWorkoutId?: number,
exerciseId?: number,
offset?: number,
limit?: number,
): CancelablePromise<Array<UserExerciseSet>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/athleteCompletedExerciseSets',
            query: {
                'trainerId': trainerId,
                'athleteId': athleteId,
                'athleteWorkoutId': athleteWorkoutId,
                'exerciseId': exerciseId,
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
     * Returns an athlete by ID
     * @param athleteId An identifier that uniquely identifies the athlete.
     * @param trainerId An identifier that uniquely identifies the requesting trainer.
     * @returns Athlete The requested resource was successfully retrieved.
     * @throws ApiError
     */
    public static getAthletes(
athleteId: number,
trainerId: number,
): CancelablePromise<Athlete> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/athletes',
            query: {
                'athleteId': athleteId,
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
     * Returns all the provided athlete's Assigned Workouts
     * @param athleteId 
     * @param trainerId 
     * @returns Workout The requested resource was successfully retrieved.
     * @throws ApiError
     */
    public static getAthleteAssignedWorkouts(
athleteId: number,
trainerId: number,
): CancelablePromise<Array<Workout>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/athleteAssignedWorkouts',
            query: {
                'athleteId': athleteId,
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

}
