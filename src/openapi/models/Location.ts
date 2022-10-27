/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Machine } from './Machine';

export type Location = {
    /**
     * Gets or Sets LocationId
     */
    locationId?: number | null;
    /**
     * Gets or Sets Name
     */
    name: string;
    /**
     * Gets or Sets Description
     */
    description?: string | null;
    /**
     * Gets or Sets Latitude
     */
    latitude?: number | null;
    /**
     * Gets or Sets Longitude
     */
    longitude?: number | null;
    /**
     * Gets or Sets StreetAddress
     */
    streetAddress?: string | null;
    /**
     * Gets or Sets City
     */
    city?: string | null;
    /**
     * Gets or Sets State
     */
    state?: string | null;
    /**
     * Gets or Sets ZipCode
     */
    zipCode?: string | null;
    /**
     * Gets or Sets SupportedMachines
     */
    supportedMachines?: Array<Machine> | null;
};
