import { LoginUser, User } from 'types/users';
import api from './api';

export const UserService = {
    register: (request: {register: LoginUser}) => {
        return api('/users/create', {}, request) as Promise<{token: string}>;
    },
    // login: (request: {login: LoginUser}) => {
    //     return api('/users/login', {}, request) as Promise<{success: boolean; token: string}>;
    // },
    detail: (request: { id: string }) => {
        return api('/users/detail', {}, request) as Promise<{ user: User }>;
    },
};