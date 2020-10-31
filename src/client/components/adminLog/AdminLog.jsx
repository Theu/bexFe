import React from 'react';
import {
    Wrapper,
    Form,
    Input,
    ButtonWrapper,
    InputButton,
} from './AdminLog.styles';
import firebaseConfig from '../../../firebase/config';

const AdminLog = () => {
    console.log('firebaseConfig :>> ', firebaseConfig);
    return (
        <Wrapper>
            <h2>Inserisci i tuoi dati per creare un utente</h2>
            <Form>
                <Input
                    name="username"
                    type="text"
                    placeholder="Chose user name"
                    autoComplete="off"
                />
                <Input
                    name="email"
                    type="email"
                    placeholder="insert email"
                    autoComplete="off"
                />
                <Input
                    name="password"
                    type="password"
                    placeholder="Chose a password"
                    autoComplete="off"
                />
                <ButtonWrapper>
                    <InputButton>inserisci</InputButton>
                    <button>usa accoiunt esistente</button>
                </ButtonWrapper>
            </Form>
        </Wrapper>
    );
};

export default AdminLog;
