/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { User } from './User';

export type AuthenticationResult = {
    success?: boolean;
    token?: string | null;
    refreshToken?: string | null;
    expiration?: string;
    user?: User;
    errors?: Array<string> | null;
};
