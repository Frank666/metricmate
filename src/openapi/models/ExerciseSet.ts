/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Exercise } from './Exercise';
import type { Workout } from './Workout';

export type ExerciseSet = {
    /**
     * Gets or Sets ExerciseSetId
     */
    exerciseSetId?: number | null;
    workout?: Workout;
    exercise: Exercise;
    /**
     * Gets or Sets Repetitions
     */
    repetitions: number;
    /**
     * Gets or Sets Weight
     */
    weight: number;
};
