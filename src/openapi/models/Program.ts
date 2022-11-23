/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Workout } from './Workout';

export type Program = {
    programId: number;
    name: string;
    workouts?: Array<Workout>;
    isActive?: boolean;
};
