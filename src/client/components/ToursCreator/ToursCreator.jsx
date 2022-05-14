import React, { useContext } from 'react';

import FirebaseContext from '../../../firebase/context';
import { NavLink } from 'react-router-dom';
import { Wrapper } from './ToursCreator.styles';

const ToursCreator = (props) => {
    const { firebase, user } = useContext(FirebaseContext);

    const handleLogOut = () => {
        firebase.logout();
    };
    return (
        <Wrapper>
            {user ? (
                <h2>
                    Ciao {user.displayName}, in questa pagina puoi comporre il
                    tour
                </h2>
            ) : (
                <NavLink to="/admin">Esegui prima il log in</NavLink>
            )}
            <h4 onClick={handleLogOut}>Log out</h4>
        </Wrapper>
    );
};

export default ToursCreator;
