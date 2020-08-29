import React, { useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import axios from 'axios';
import logo from '../../../assets/berlinoexplorer.png';
import { Card, Logo, Form, Input, Button, Error } from './styles';
import { useAuth } from '../../../context/auth';

export const LogIn = () => {
    const [isLoggedIn, setLoggedIn] = useState(false);
    const [isError, setError] = useState(false);
    const [userName, setUserName] = useState('');
    const [psw, setPsw] = useState('');
    const { setAuthTokens } = useAuth();

    const authenticationPayload = { userName, psw };

    const postLogin = () => {
        axios
            .post('https://www.somewhere.com/auth/login', authenticationPayload)
            .then((result) => {
                if (result.status === 200) {
                    setAuthTokens(result.data);
                    setLoggedIn(true);
                } else {
                    setError(true);
                }
            })
            .catch((error) => {
                setError(true);
            });
    };

    // will have to find the path (context or redux :D or...)
    if (isLoggedIn) {
        return <Redirect to="/" />;
    }

    return (
        <Card>
            <Logo src={logo} />
            <Form>
                <Input
                    type="username"
                    value={userName}
                    onChange={(ev) => {
                        setUserName(ev.target.value);
                    }}
                    placeholder="email"
                />
                <Input
                    type="password"
                    value={psw}
                    onChange={(ev) => {
                        setPsw(ev.target.value);
                    }}
                    placeholder="password"
                />
                <Button onClick={postLogin}>Sign In</Button>
            </Form>
            <Link to="./signup">Don't have an account?</Link>
            { isError &&<Error>The username or password provided were incorrect!</Error> }
        </Card>
    );
};

export default LogIn;
