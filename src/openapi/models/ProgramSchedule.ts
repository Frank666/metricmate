/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Workout } from './Workout';

export type ProgramSchedule = {
    /**
     * Gets or Sets ProgramScheduleId
     */
    programScheduleId?: number | null;
    /**
     * Gets or Sets Name
     */
    name: string;
    /**
     * Gets or Sets Workouts
     */
    workouts?: Array<Workout> | null;
    /**
     * Gets or Sets IsActive
     */
    isActive?: boolean | null;
};
