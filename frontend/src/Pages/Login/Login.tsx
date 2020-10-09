import React, { useState } from 'react';
import { UsersService } from 'api/users-service';
import './Login.scss';

export const Login = () => {
    const [userName, setUserName] = useState<string>('');
    const [userPassword, setUserPassword] = useState<string>('');

    const onUserNameChange = (e: any) => {
        setUserName(e.target.value);
    };

    const onPasswordChange = (e: any) => {
        setUserPassword(e.target.value);
    };

    const onSubmit = async (login: {username: string, password: string}, e:any) => {
        e.preventDefault();
        try {
            UsersService.login({login});
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <form onSubmit={(e) => onSubmit({username: userName, password: userPassword}, e)}>
            <input type="text" placeholder="username" onChange={(e) => onUserNameChange(e)}/>
            <input type="password" placeholder="password" onChange={(e) => onPasswordChange(e)}/>
            <button type='submit'>Login</button>
        </form>
    );
};
