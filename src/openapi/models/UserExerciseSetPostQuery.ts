/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type UserExerciseSetPostQuery = {
    /**
     * Gets or Sets UserExerciseSetId
     */
    userExerciseSetId?: number | null;
    /**
     * Gets or Sets UserId
     */
    userId: number;
    /**
     * Gets or Sets ExerciseId
     */
    exerciseId: number;
    /**
     * Gets or Sets ExerciseName
     */
    exerciseName: string;
    /**
     * Gets or Sets UserWorkoutId
     */
    userWorkoutId?: number | null;
    /**
     * Gets or Sets MachineId
     */
    machineId?: number | null;
    /**
     * Gets or Sets MachineName
     */
    machineName?: string | null;
    /**
     * Gets or Sets StartTime
     */
    startTime: string;
    /**
     * Gets or Sets EndTime
     */
    endTime: string;
    /**
     * Gets or Sets Position
     */
    position?: number | null;
    /**
     * Gets or Sets RepetitionsExpected
     */
    repetitionsExpected?: number | null;
    /**
     * Gets or Sets RepetitionsObserved
     */
    repetitionsObserved: number;
    /**
     * Gets or Sets WeightExpected
     */
    weightExpected?: number | null;
    /**
     * Gets or Sets WeightObserved
     */
    weightObserved: number;
    /**
     * Gets or Sets DeviceId
     */
    deviceId?: string | null;
};
