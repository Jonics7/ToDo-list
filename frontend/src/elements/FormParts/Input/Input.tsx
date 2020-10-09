import React from 'react';
import classNames from 'classnames';

import './Input.scss';

import Error from '../Error/Error';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label: string;
    transparent?: boolean;
    hint?: React.ReactNode;
    password?: boolean;
    number?: boolean;
    error?: string;
    prefix?: string;
    autoComplete?: string;
    type?: never;
}

const Input = ({
    className,
    label,
    transparent = false,
    hint,
    password = false,
    number = false,
    error,
    prefix,
    autoComplete,
    ...props
}: InputProps) => {
    const numberProps = number
        ? {
              type: 'number',
              min: '0.00',
              max: '1000000.0',
              step: 'any',
          }
        : undefined;

    return (
        <div className={`${transparent === true ? `Input-transparent` : `Input`} ${className}`} style={props.style}>
            <div className="Input-top">
                <label className="tagline text-white" style={{ whiteSpace: 'nowrap' }} htmlFor={props.name}>
                    {label}
                </label>
                {hint ? hint : null}
            </div>

            {error && <Error className="mb-8" error={error} />}
            <div className="Input-main">
                {prefix ? (
                    <span className={classNames('Input-prefix', { active: Boolean(props.value) })}>{prefix}</span>
                ) : null}
                <input
                    className="text-small"
                    {...(password ? { type: 'password' } : { type: 'text' })}
                    id={props.name}
                    name={props.name}
                    placeholder={props.placeholder}
                    onChange={props.onChange}
                    value={props.value}
                    maxLength={props.maxLength}
                    autoComplete={password ? 'off' : autoComplete}
                    {...numberProps}
                />
            </div>
        </div>
    );
};

export default Input;