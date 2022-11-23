import { Athlete } from '../openapi/models/Athlete';

export type SearchAthlete = {
    /**
     * Gets or Sets UserId
     */
    searchCriteria: string;
    /**
     * Gets or Sets token
     */
    athletesAPI: Array<Athlete>;
    /**
     * Gets or Sets refreshToken
     */
    athletesFiltered: Array<Athlete>;    
};

