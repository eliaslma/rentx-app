import React from "react";

export interface AuthenticatedUserData {
    token: string,
    user: {
        id: string,
        name: string,
        email: string,
        driver_license: string,
        avatar: string,
    }
}