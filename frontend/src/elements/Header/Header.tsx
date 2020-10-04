import React from 'react';
import './Header.scss';

export const Header = () => {
    const user = false;

    return (
        <div className="Header">
            <div className="Header-item">Home</div>
            {user ? <div className="Header-item">My tasks</div> : null}
            {user ? <div className="Header-item">Profile</div> : <div className="Header-item">Login</div>}
        </div>
    );
};
