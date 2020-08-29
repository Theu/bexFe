import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// redux. check if after context introduction this is still needed
import store from './client/redux/store/configureStore';
import { Provider } from 'react-redux';

// context. let's see who win
import { AuthContext } from './client/context/auth';

import { tourMock } from '../src/server/tourMock';

import PrivateRoute from './client/components/authentication/PrivateRoute';
import Admin from './client/components/authentication/mockComponent/AdminMock';
import LoginMock from './client/components/authentication/mockComponent/LoginMock';
import LogIn from './client/components/authentication/authForm/LogIn';
import SignUp from './client/components/authentication/authForm/SignUp';

import Header from './client/components/header/Header';
import TourHomePage from './client/components/tourHomePage/TourHomePage';
import TourExplanation from './client/components/tourExplanation/TourExplanation';
import './index.scss';

const tourList = Object.keys(tourMock);

export const App = (props) => {
    return (
        <Provider store={store}>
            <AuthContext.Provider value={false}>
                <Router>
                    <>
                        <Header />
                        <Switch>
                            <Route exact path="/" component={TourHomePage} />
                            {tourList.map((path) => (
                                <Route
                                    key={path}
                                    path={`/${path}`}
                                    component={TourExplanation}
                                />
                            ))}
                        </Switch>
                        <Route path="/login" component={LogIn} />
                        <Route path="/signup" component={SignUp} />
                        <Route path="/loginmock" component={LoginMock} />
                        <PrivateRoute path="/admin" component={Admin} />
                    </>
                </Router>
            </AuthContext.Provider>
        </Provider>
    );
};

export default App;
