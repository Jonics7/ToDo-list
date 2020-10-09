import React from 'react';
import classNames from 'classnames';

import './Error.scss';

type ErrorProps = {
    error: string;
    className?: string;
} & React.HTMLAttributes<HTMLDivElement>;

const Error = ({ error, className, ...props }: ErrorProps) => {
    return (
        <div className={classNames('Error', className)} {...props}>
            {error}
        </div>
    );
};

export default Error;