import React from 'react';
import classNames from 'classnames';

import './Button.scss';

export type ButtonType = 'secondary' | 'blue' | 'red';

type Button40pxProps = {
    text: string;
    btype?: ButtonType;
    children?: never;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

const Button40px = ({ text, className, btype, ...props }: Button40pxProps) => {
    return (
        <button className={classNames('Button40px', btype, className)} {...props}>
            <span className="button-text">{text}</span>
        </button>
    );
};

export default Button40px;