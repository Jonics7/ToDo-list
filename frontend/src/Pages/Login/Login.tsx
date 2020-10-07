import React from 'react';
import './Login.scss';

export const Login = () => {
    const onChange = (e: any) => {
        const something = e.target.value;
    };

    const onSubmit = (e: any) => {
        const something = e.target.value;
        e.preventDefault();
    }

    return (
    <form onSubmit={(e) => onSubmit(e)}>
        <input type="text" placeholder="username" onChange={(e) => onChange(e)}/>
        <input type="password" placeholder="password" onChange={(e) => onChange(e)}/>
        <button type='submit'>Login</button>
    </form>
    );
};
