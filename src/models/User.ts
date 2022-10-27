export type UserAuthorized = {
    /**
     * Gets or Sets UserId
     */
    success: Boolean;
    /**
     * Gets or Sets token
     */
    token: string;
    /**
     * Gets or Sets refreshToken
     */
    refreshToken: string;
    /**
     * Gets or Sets expiration
     */
    expiration: Date;
    /**
     * Gets or Sets User
     */
    User: User;
};


export type User = {
    /**
     * Gets or Sets UserId
     */
    userId: Number;
    /**
     * Gets or Sets Name
     */
    name: string;
    /**
     * Gets or Sets Email
     */
    email: string;
    /**
     * Gets or Sets role
     */
    role: Role;
    /**
     * Gets or Sets status
     */
    status: Boolean;
};


export type Role = {
    /**
     * Gets or Sets roleId
     */
    roleId: Number;
    /**
     * Gets or Sets Name
     */
    name: string;
    /**
     * Gets or Sets description
     */
    description: string;
};
