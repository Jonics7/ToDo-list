import { LoginUser, UserDetail } from '../../types/users';
import { UsersService } from '../../api/users-service';
import cookie from 'react-cookies';
export const SET_USER = 'Users/SET_USER';

export interface SetUserAction {
    type: typeof SET_USER,
    user: UserDetail,
};

export const loginUser = (values: LoginUser & { rememberMe: boolean }) => {
    return () => {
        return UsersService.login({ login: values }).then(({ token }) => {
            const options = values.rememberMe ? { maxAge: 2592000 } : { path: '/' };
            cookie.remove('jwt-key'); // can be old jwt-key without options
            cookie.save('jwt-key', options);
        });
    }
};

export const logoutUser = () => {
    cookie.remove('jwt-key', { path: '/' });
};

export const registerUser = (register: LoginUser) => {
    return UsersService.register({ register });
};
