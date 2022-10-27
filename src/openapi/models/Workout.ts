/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { MuscleGroup } from './MuscleGroup';
import type { WorkoutExerciseSet } from './WorkoutExerciseSet';

export type Workout = {
    /**
     * Gets or Sets WorkoutId
     */
    workoutId: number;
    /**
     * Gets or Sets Name
     */
    name: string;
    /**
     * Gets or Sets Intensity
     */
    intensity: string;
    /**
     * Gets or Sets Description
     */
    description?: string | null;
    /**
     * Gets or Sets Duration
     */
    duration?: number | null;
    /**
     * Gets or Sets ImageData
     */
    imageData?: string | null;
    /**
     * Gets or Sets ImageTitle
     */
    imageTitle?: string | null;
    /**
     * Gets or Sets CreatedByTrainer
     */
    createdByTrainerId?: number | null;
    /**
     * Gets or Sets AssignedExercises
     */
    assignedExerciseSets?: Array<WorkoutExerciseSet> | null;
    /**
     * Gets or Sets MuscleGroups
     */
    muscleGroups?: Array<MuscleGroup> | null;
};
