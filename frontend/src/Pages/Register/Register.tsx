import React from 'react';
import './Register.scss';
import { registerUser } from 'store/Users/actions';
import { Form, Field } from 'react-final-form';
import { FORM_ERROR } from 'final-form';
import Input from '../../elements/FormParts/Input/Input';
import Error from '../../elements/FormParts/Error/Error';
import Button from '../../elements/FormParts/Button/Button';

export const Register = () => {
    const capitalize = (s: string) => {
        //if (typeof s !== 'string') return ''
        const _s = s + '';
        return _s.charAt(0).toUpperCase() + _s.slice(1);
    };

    const onSubmit = async (values: {username: string, password: string}) => {
        try {
            await registerUser({
                username: values.username,
                password: values.password
            });
        } catch (err) {
            return { [FORM_ERROR]: capitalize(err) };
        }
    }

    return (
        <>
            <Form 
                onSubmit={onSubmit}
                subscription={{ submitError: true, submitting: true }}
                render={({ handleSubmit, submitError, submitting }) => (
                    <form onSubmit={handleSubmit}>
                        <Field name="username">
                            {({ input, meta }) => (
                                <Input 
                                    className="username-input"
                                    label="Username"
                                    autoComplete="username"
                                    placeholder="Username"
                                    {...{ ...input, type: undefined }}
                                    error={meta.touched && meta.error ? meta.error : undefined}
                                />
                            )}
                        </Field>
                        <Field name="email">
                            {({ input, meta }) => (
                                <Input 
                                    className="email-input"
                                    label="Email"
                                    autoComplete="email"
                                    placeholder="name@example.com"
                                    {...{ ...input, type: undefined }}
                                    error={meta.touched && meta.error ? meta.error : undefined}
                                />
                            )}
                        </Field>
                        <Field name="password">
                            {({ input, meta }) => (
                                <Input
                                    className="mt-24"
                                    label="Password"
                                    password
                                    {...{ ...input, type: undefined }}
                                    error={meta.touched && meta.error ? meta.error : undefined}
                                />
                            )}
                        </Field>
                        {submitError && <Error className="form-error" error={submitError} />}
                        <Button
                            text={submitting ? 'Sign in' : 'Sign up'}
                            disabled={submitting}
                            type="submit"
                        />
                    </form>
                )}
            />
        </>
    );
};
