import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../assets/berlinoexplorer.png';
import { Card, Logo, Form, Input, Button } from './styles';

export const SignUp = () => (
    <Card>
        <Logo src={logo} />
        <Form>
            <Input type="email" placeholder="email" />
            <Input type="password" placeholder="password" />
            <Input type="password" placeholder="password again" />
            <Button>Sign Up</Button>
        </Form>
        <Link to="./login">Already have an account?</Link>
    </Card>
);

export default SignUp;
