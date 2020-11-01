import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { tourMock } from '../src/server/tourMock';

import Header from './client/components/header/Header';
import TourHomePage from './client/components/tourHomePage/TourHomePage';
import TourExplanation from './client/components/tourExplanation/TourExplanation';

import AdminLog from './client/components/adminLog/AdminLog';
import CreateTours from './client/components/createTours/CreateTours';

import './index.scss';

const tourList = Object.keys(tourMock);

const App = () => (
    <BrowserRouter>
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
        <Route path="/admin" component={AdminLog} />
        <Route path="/create-tours" component={CreateTours} />
    </BrowserRouter>
);

export default App;
