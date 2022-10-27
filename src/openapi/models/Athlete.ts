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
     * Gets or Sets User
     */
    userId: number;
    /**
     * Gets or Sets LeadTrainer
     */
    leadTrainerId: number;
    /**
     * Gets or Sets FitnessGoal
     */
    fitnessGoal: string;
    /**
     * Gets or Sets Trainers
     */
    trainers?: Array<Trainer> | null;
};
