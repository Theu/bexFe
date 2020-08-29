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
import Header from './client/components/header/Header';
import TourHomePage from './client/components/tourHomePage/TourHomePage';
import TourExplanation from './client/components/tourExplanation/TourExplanation';
import './index.scss';

const tourList = Object.keys(tourMock);

render(
    <React.StrictMode>
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
                        <PrivateRoute path="/admin" component={Admin} />
                    </>
                </Router>
            </AuthContext.Provider>
        </Provider>
    </React.StrictMode>,
    document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// import * as serviceWorker from './serviceWorker';
// serviceWorker.unregister();
