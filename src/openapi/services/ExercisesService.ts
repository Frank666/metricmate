/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Exercise } from '../models/Exercise';
import type { Location } from '../models/Location';
import type { MachineMeasurement } from '../models/MachineMeasurement';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class ExercisesService {

    /**
     * Delete an existing exercise using the identifier
     * @param exerciseId An identifier that uniquely identifies the exercise to get.
     * @param ifMatch The ETag header value used to prevent the DELETE from removing a resource modified by another consumer.
     * @returns void 
     * @throws ApiError
     */
    public static deleteExercises(
exerciseId: number,
ifMatch?: string,
): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/exercises/{exerciseId}',
            path: {
                'exerciseId': exerciseId,
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
     * Get an exercise by ID
     * @param exerciseId An identifier that uniquely identifies the exercise to get.
     * @param ifMatch The ETag header value used to prevent the PUT from updating a resource modified by another consumer.
     * @returns Exercise The requested resource was successfully retrieved.
     * @throws ApiError
     */
    public static getExercises(
exerciseId: number,
ifMatch?: string,
): CancelablePromise<Exercise> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/exercises/{exerciseId}',
            path: {
                'exerciseId': exerciseId,
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
     * Updates a exercise based on the identifier
     * @param exerciseId An identifier that uniquely identifies the exercise to get.
     * @param ifMatch The ETag header value used to prevent the PUT from updating a resource modified by another consumer.
     * @returns void 
     * @throws ApiError
     */
    public static putExercises(
exerciseId: number,
ifMatch?: string,
): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/exercises/{exerciseId}',
            path: {
                'exerciseId': exerciseId,
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
     * Get list of exercises
     * @param machineId Gets or Sets MachineId
     * @param name Gets or Sets Name
     * @param manufacturer Gets or Sets Manufacturer
     * @param model Gets or Sets Model
     * @param orientationName Gets or Sets Name
     * @param offset The number of items to skip before starting to collect the result set
     * @param limit The number of items to return
     * @param exerciseName The exercise name
     * @param nfcTag Gets or Sets NfcTag
     * @param maxWeight Gets or Sets MaxWeight
     * @param maxWeightHeight Gets or Sets MaxWeightHeight
     * @param minWeight Gets or Sets MinWeight
     * @param minWeightHeight Gets or Sets MinWeightHeight
     * @param increment Gets or Sets Increment
     * @param orientationOrientationId Gets or Sets OrientationId
     * @param orientationDescription Gets or Sets Description
     * @param orientationRepMovementDownThenUp Gets or Sets RepMovementDownThenUp
     * @param orientationWeightDetectionSupported Gets or Sets WeightDetectionSupported
     * @param locations Gets or Sets Locations
     * @param measurements Gets or Sets Measurements
     * @param supportedExercises Gets or Sets SupportedExercises
     * @returns Exercise The requested resource was successfully retrieved.
     * @throws ApiError
     */
    public static getExercises1(
machineId: number,
name: string,
manufacturer: string,
model: string,
orientationName: string,
offset?: number,
limit?: number,
exerciseName?: string,
nfcTag?: string,
maxWeight?: number,
maxWeightHeight?: number,
minWeight?: number,
minWeightHeight?: number,
increment?: number,
orientationOrientationId?: number,
orientationDescription?: string,
orientationRepMovementDownThenUp?: boolean,
orientationWeightDetectionSupported?: boolean,
locations?: Array<Location>,
measurements?: Array<MachineMeasurement>,
supportedExercises?: Array<Exercise>,
): CancelablePromise<Array<Exercise>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/exercises',
            query: {
                'offset': offset,
                'limit': limit,
                'exerciseName': exerciseName,
                'MachineId': machineId,
                'Name': name,
                'Manufacturer': manufacturer,
                'Model': model,
                'NfcTag': nfcTag,
                'MaxWeight': maxWeight,
                'MaxWeightHeight': maxWeightHeight,
                'MinWeight': minWeight,
                'MinWeightHeight': minWeightHeight,
                'Increment': increment,
                'Orientation.OrientationId': orientationOrientationId,
                'Orientation.Name': orientationName,
                'Orientation.Description': orientationDescription,
                'Orientation.RepMovementDownThenUp': orientationRepMovementDownThenUp,
                'Orientation.WeightDetectionSupported': orientationWeightDetectionSupported,
                'Locations': locations,
                'Measurements': measurements,
                'SupportedExercises': supportedExercises,
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
     * Add a new exercise
     * The POST operation can be used to create or update resources. In database terms, this is often referred to as an \"upsert\" operation (insert + update). Clients should NOT include the resource \"id\" in the JSON body because it will result in an error (you must use a PUT operation to update a resource by \"id\"). The web service will identify whether the resource already exists based on the natural key values provided, and update or create the resource appropriately.
     * @param requestBody 
     * @returns any Updated. The resource was updated.
     * @throws ApiError
     */
    public static postExercises(
requestBody?: Exercise,
): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/exercises',
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
