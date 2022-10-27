/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Athlete } from './Athlete';
import type { User } from './User';

export type Trainer = {
    /**
     * Gets or Sets TrainerId
     */
    trainerId: number;
    /**
     * Gets or Sets BusinessName
     */
    businessName?: string | null;
    user?: User;
    /**
     * Gets or Sets Athletes
     */
    athletes?: Array<Athlete> | null;
};
