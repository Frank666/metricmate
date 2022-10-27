/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Machine } from '../models/Machine';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class MachinesService {

    /**
     * Get list of machines
     * @param offset The number of items to skip before starting to collect the result set
     * @param limit The number of items to return
     * @param name The machine name
     * @param manufacturer The machine manufacturer
     * @param model The model number of the machine
     * @param nfcTag NFC Tag identifier
     * @param locationIdentifier Location identifier
     * @returns Machine The requested resource was successfully retrieved.
     * @throws ApiError
     */
    public static getMachines(
offset?: number,
limit?: number,
name?: string,
manufacturer?: string,
model?: string,
nfcTag?: string,
locationIdentifier?: number,
): CancelablePromise<Array<Machine>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/machines',
            query: {
                'offset': offset,
                'limit': limit,
                'name': name,
                'manufacturer': manufacturer,
                'model': model,
                'nfcTag': nfcTag,
                'locationIdentifier': locationIdentifier,
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
     * Add a new machine
     * @param defaultExerciseName 
     * @param requestBody 
     * @returns Machine Updated. The resource was updated.
     * @returns any Created. The resource was created.
     * @throws ApiError
     */
    public static postMachines(
defaultExerciseName?: string,
requestBody?: Machine,
): CancelablePromise<Machine | any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/machines',
            query: {
                'defaultExerciseName': defaultExerciseName,
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

    /**
     * Delete an existing machine using the identifier
     * @param machineId An identifier that uniquely identifies the machine.
     * @param ifMatch The ETag header value used to prevent the DELETE from removing a resource modified by another consumer.
     * @returns void 
     * @throws ApiError
     */
    public static deleteMachines(
machineId: string,
ifMatch?: string,
): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/machines/{machineId}',
            path: {
                'machineId': machineId,
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
     * Get a machine by ID
     * @param machineId An identifier that uniquely identifies the machine.
     * @param ifMatch The ETag header value used to prevent the PUT from updating a resource modified by another consumer.
     * @returns Machine The requested resource was successfully retrieved.
     * @throws ApiError
     */
    public static getMachines1(
machineId: string,
ifMatch?: string,
): CancelablePromise<Machine> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/machines/{machineId}',
            path: {
                'machineId': machineId,
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
     * Updates a machine based on the identifier
     * @param machineId An identifier that uniquely identifies the machine.
     * @param ifMatch The ETag header value used to prevent the PUT from updating a resource modified by another consumer.
     * @param requestBody Machine type object
     * @returns void 
     * @throws ApiError
     */
    public static putMachines(
machineId: string,
ifMatch?: string,
requestBody?: Machine,
): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/machines/{machineId}',
            path: {
                'machineId': machineId,
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
