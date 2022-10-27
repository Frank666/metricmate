/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Exercise } from './Exercise';
import type { Location } from './Location';
import type { MachineMeasurement } from './MachineMeasurement';
import type { Orientation } from './Orientation';

export type Machine = {
    /**
     * Gets or Sets MachineId
     */
    machineId: number;
    /**
     * Gets or Sets Name
     */
    name: string;
    /**
     * Gets or Sets Manufacturer
     */
    manufacturer: string;
    /**
     * Gets or Sets Model
     */
    model: string;
    /**
     * Gets or Sets NfcTag
     */
    nfcTag?: string | null;
    /**
     * Gets or Sets MaxWeight
     */
    maxWeight?: number | null;
    /**
     * Gets or Sets MaxWeightHeight
     */
    maxWeightHeight?: number | null;
    /**
     * Gets or Sets MinWeight
     */
    minWeight?: number | null;
    /**
     * Gets or Sets MinWeightHeight
     */
    minWeightHeight?: number | null;
    /**
     * Gets or Sets Increment
     */
    increment?: number | null;
    orientation?: Orientation;
    /**
     * Gets or Sets Locations
     */
    locations?: Array<Location> | null;
    /**
     * Gets or Sets Measurements
     */
    measurements?: Array<MachineMeasurement> | null;
    /**
     * Gets or Sets SupportedExercises
     */
    supportedExercises?: Array<Exercise> | null;
};
