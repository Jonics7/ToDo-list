import React, { useState } from 'react';
import './Register.scss';
import { UserService } from '../../api/users-service';

export const Register = () => {
    const [userName, setUserName] = useState<string>('');
    const [userPassword, setUserPassword] = useState<string>('');

    const onUserNameChange = (e: any) => {
        setUserName(e.target.value);
    };

    const onPasswordChange = (e: any) => {
        setUserPassword(e.target.value);
    };

    const onSubmit = async (register: {username: string, password: string}, e:any) => {
        e.preventDefault();
        try {
            UserService.register({register});
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <form onSubmit={(e) => onSubmit({username: userName, password: userPassword}, e)}>
            <input type="text" placeholder="username" onChange={(e) => onUserNameChange(e)}/>
            <input type="password" placeholder="password" onChange={(e) => onPasswordChange(e)}/>
            <button type='submit'>Register</button>
        </form>
    );
};
