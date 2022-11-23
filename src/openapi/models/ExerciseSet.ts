/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Exercise } from './Exercise';
import type { Workout } from './Workout';

export type ExerciseSet = {
    exerciseSetId?: number;
    workout?: Workout;
    exercise: Exercise;
    repetitions: number;
    weight: number;
};
