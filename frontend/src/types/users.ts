export interface User {
    username: string;
    password: string;
    email?: string;
}

export interface LoginUser {
    username: string;
    email?: string;
    password: string;
    // token: string;
}