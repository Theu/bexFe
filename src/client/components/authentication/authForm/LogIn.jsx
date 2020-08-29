import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../assets/berlinoexplorer.png';
import { Card, Logo, Form, Input, Button } from './styles';

export const LogIn = () => (
    <Card>
        <Logo src={logo} />
        <Form>
            <Input type="email" placeholder="email" />
            <Input type="password" placeholder="password" />
            <Button>Sign In</Button>
        </Form>
        <Link to="./signup">Don't have an account?</Link>
    </Card>
);

export default LogIn;
