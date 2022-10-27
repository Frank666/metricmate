/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type WorkoutExerciseSet = {
    /**
     * Gets or Sets WorkoutExerciseSetId
     */
    workoutExerciseSetId?: number | null;
    /**
     * Gets or Sets WorkoutId
     */
    workoutId: number;
    /**
     * Gets or Sets ExerciseId
     */
    exerciseId: number;
    /**
     * Gets or Sets Repetitions
     */
    repetitions: number;
    /**
     * Gets or Sets DefaultWeight
     */
    defaultWeight: number;
    /**
     * Gets or Sets PostSetRestDuration
     */
    postSetRestDuration: number;
    /**
     * Gets or Sets Sequence
     */
    sequence: number;
    /**
     * Gets or Sets Exercise Name
     */
    exerciseName?: string | null;
    /**
     * Gets or Sets Workout Name
     */
    workoutName?: string | null;
    /**
     * Gets or Sets Default Machine Id
     */
    defaultMachineId?: number | null;
    /**
     * Gets or Sets Default Machine Name
     */
    defaultMachineName?: string | null;
};
