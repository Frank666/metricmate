/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Machine } from './Machine';
import type { Workout } from './Workout';

export type Exercise = {
    /**
     * Gets or Sets ExerciseId
     */
    exerciseId?: number | null;
    /**
     * Gets or Sets Name
     */
    name: string;
    /**
     * Gets or Sets SupportedMachines
     */
    supportedMachines?: Array<Machine> | null;
    /**
     * Gets or Sets AssociatedWorkouts
     */
    associatedWorkouts?: Array<Workout> | null;
};
