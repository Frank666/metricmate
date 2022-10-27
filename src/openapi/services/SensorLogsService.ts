/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { SensorLog } from '../models/SensorLog';
import type { SensorLogPostQuery } from '../models/SensorLogPostQuery';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class SensorLogsService {

    /**
     * Get the sensor logs for the provided user workout id
     * @param userWorkoutId The id for the user workout
     * @param sensorTypeId The id for sensor type of the log's data
     * @returns SensorLog The requested resource was successfully retrieved.
     * @throws ApiError
     */
    public static getSensorLogs(
userWorkoutId: number,
sensorTypeId?: number,
): CancelablePromise<Array<SensorLog>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/sensorLogs',
            query: {
                'userWorkoutId': userWorkoutId,
                'sensorTypeId': sensorTypeId,
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
     * Store the sensor log file for a user workout
     * @param requestBody 
     * @returns SensorLog Updated. The resource was updated.
     * @returns any Created. The resource was created.
     * @throws ApiError
     */
    public static postSensorLogs(
requestBody?: SensorLogPostQuery,
): CancelablePromise<SensorLog | any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/sensorLogs',
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
