/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type UserWorkoutPostQuery = {
    /**
     * Gets or Sets UserWorkoutId
     */
    userWorkoutId?: number | null;
    /**
     * Gets or Sets UserId
     */
    userId: number;
    /**
     * Gets or Sets StartTime
     */
    startTime: string;
    /**
     * Gets or Sets EndTime
     */
    endTime?: string | null;
    /**
     * Gets or Sets Intensity
     */
    intensity?: number | null;
    /**
     * Gets or Sets CaloricExpenditure
     */
    caloricExpenditure?: number | null;
};
