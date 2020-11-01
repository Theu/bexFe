import React, { useState } from 'react';

import useFormValidation from '../hooks/useFormValidation';
import validateLogin from './validateLogin';
import {
    Wrapper,
    Form,
    Input,
    ButtonWrapper,
    InputButton,
    ErrorText,
} from './AdminLog.styles';
import firebase from '../../../firebase';

const INITIAL_STATE = {
    name: '',
    email: '',
    password: '',
};

const AdminLog = (props) => {
    const {
        values,
        errors,
        isSubmitting,
        handleChange,
        handleBlur,
        handleSubmit,
    } = useFormValidation(INITIAL_STATE, validateLogin, authenticateUser);
    const [login, setLogin] = useState(true);
    const [firebaseError, setFirebaseError] = useState(null);
    const selectLoginOrSignUp = () => setLogin((prevLogin) => !prevLogin);

    async function authenticateUser() {
        const { name, email, password } = values;
        try {
            login
                ? await firebase.login(email, password)
                : await firebase.registerNewUser(name, email, password);

            props.history.push('/create-tours');
        } catch (err) {
            setFirebaseError(err.message);
        }
    }

    console.log('RENDER');

    return (
        <Wrapper>
            <h2>
                {login
                    ? 'Inserisci email e password per effettuare il login'
                    : 'Inserisci i tuoi dati per creare un utente'}
            </h2>
            <Form onSubmit={handleSubmit}>
                {!login && (
                    <Input
                        onChange={handleChange}
                        value={values.username}
                        name="username"
                        type="text"
                        placeholder="Chose user name"
                        autoComplete="off"
                    />
                )}
                <Input
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.email}
                    name="email"
                    type="email"
                    placeholder="insert email"
                    autoComplete="off"
                    error={!!errors.email}
                />
                {!!errors.email && <ErrorText>{errors.email}</ErrorText>}
                <Input
                    onChange={handleChange}
                    value={values.password}
                    name="password"
                    type="password"
                    placeholder="Chose a password"
                    autoComplete="off"
                    error={!!errors.password}
                />
                {!!errors.password && <ErrorText>{errors.password}</ErrorText>}
                {firebaseError && <ErrorText>{firebaseError}</ErrorText>}
                <ButtonWrapper>
                    <InputButton type="submit" disabled={isSubmitting}>
                        inserisci
                    </InputButton>
                    <button type="button" onClick={selectLoginOrSignUp}>
                        {login ? 'crea account' : 'usa account esistente'}
                    </button>
                </ButtonWrapper>
            </Form>
        </Wrapper>
    );
};

export default AdminLog;
