import { ToDo } from "./todos";

export interface User {
    username: string;
    password: string;
    id: string;
    avatar?: string;
};

export interface UserDetail extends User {
    todos: Array<ToDo>
    email?: string;
}

export interface LoginUser {
    username: string;
    password: string;
    email?: string;
};