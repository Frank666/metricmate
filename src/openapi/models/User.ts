/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Role } from './Role';

export type User = {
    /**
     * Gets or Sets UserId
     */
    userId: number;
    /**
     * Gets or Sets Name
     */
    name: string;
    /**
     * Gets or Sets Email
     */
    email: string;
    role?: Role;
    /**
     * Gets or Sets TrainerId
     */
    trainerId: number;
};
