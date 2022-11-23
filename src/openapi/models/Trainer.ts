/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Athlete } from './Athlete';

export type Trainer = {
    /**
     * Gets or Sets TrainerId
     */
    trainerId: number;
    /**
     * Gets or Sets BusinessName
     */
    businessName?: string | null;
    /**
     * Gets or Sets UserId of the Trainer
     */
    userId: number;
    /**
     * Gets or Sets Athletes
     */
    athletes?: Array<Athlete> | null;
};
