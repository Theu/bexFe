import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { tourMock as tour } from '../src/server/tourMock';

import Header from './client/components/header/Header';
import HomePage from './client/components/homePage/HomePage';
import TourExplanation from './client/components/tourExplanation/TourExplanation';
import AdminLog from './client/components/adminLog/AdminLog';
import ToursCreator from './client/components/toursCreator/ToursCreator';
import useAuth from './client/hooks/useAuth';

import firebase, { FirebaseContext } from './firebase';

import './index.scss';

const tourList = tour.map(({ tourName }) => tourName);

const App = () => {
    const user = useAuth();

    return (
        <BrowserRouter>
            <FirebaseContext.Provider value={{ user, firebase }}>
                <Header />
                <Switch>
                    <Route exact path="/mappe" component={HomePage} />
                    {tourList.map((path) => (
                        <Route
                            key={path}
                            path={`/${path}`}
                            component={TourExplanation}
                        />
                    ))}
                </Switch>
                <Route path="/admin" component={AdminLog} />
                <Route path="/create-tours" component={ToursCreator} />
            </FirebaseContext.Provider>
        </BrowserRouter>
    );
};

export default App;
