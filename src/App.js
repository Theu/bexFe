import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { tourMock } from '../src/server/tourMock';

import Header from './client/components/header/Header';
import TourHomePage from './client/components/tourHomePage/TourHomePage';
import TourExplanation from './client/components/tourExplanation/TourExplanation';
import './index.scss';

const tourList = Object.keys(tourMock);

const App = () => (
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
);

export default App;
