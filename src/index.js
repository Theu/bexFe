import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import store from './client/redux/store/configureStore';
import { Provider } from 'react-redux';

import * as serviceWorker from './serviceWorker';

import { tourMock } from '../src/server/tourMock';

import Header from './client/components/header/Header';
import TourHomePage from './client/components/tourHomePage/TourHomePage';
import TourExplanation from './client/components/tourExplanation/TourExplanation';
import './index.scss';

const tourList = Object.keys(tourMock);

render(
    <React.StrictMode>
        <Provider store={store}>
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
                </>
            </Router>
        </Provider>
    </React.StrictMode>,
    document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
