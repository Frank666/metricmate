/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Trainer } from './Trainer';

export type Athlete = {
    /**
     * Gets or Sets AthleteId
     */
    athleteId: number;
    /**
     * Gets or Sets UserId of the Athlete
     */
    userId: number;
    /**
     * Gets or Sets LeadTrainer
     */
    leadTrainerId: number;
    /**
     * Gets or Sets LastWorkoutDateTime
     */
    lastWorkoutDateTime?: string | null;
    /**
     * Gets or Sets FitnessGoal
     */
    fitnessGoal: string;
    /**
     * Gets or Sets PowerLevel
     */
    powerLevel?: number | null;
    /**
     * Gets or Sets NickName
     */
    nickname?: string | null;
    /**
     * Gets or Sets Trainers
     */
    trainers?: Array<Trainer> | null;
};
