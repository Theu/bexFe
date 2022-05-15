import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { tourMock as tour } from '../src/server/tourMock';
import Header from './client/components/header/Header';
import HomePage from './client/components/HomePage/HomePage';
import Tour from './client/components/tour/Tour';
import AdminLog from './client/components/adminLog/AdminLog';
import ToursCreator from './client/components/ToursCreator/ToursCreator';
// import useAuth from './client/hooks/useAuth';
// import firebase, { FirebaseContext } from './firebase';
import './index.scss';
import { useTours } from 'client/hooks/useTour';

const tourListMock = tour.map(({ tourName }) => tourName);

const App = () => {
    // const user = useAuth();
    const [tours, isLoading] = useTours();

    if (isLoading) return <p>Loading...</p>;

    console.log('======================');
    console.log('tour :>> ', tour);
    console.log('tourccs :>> ', tours);
    console.log('======================');
    // @ts-ignore
    const tourList = tours.map(({ tourName }) => tourName);
    console.log('tourList :>> ', tourList);
    console.log('tourListMock :>> ', tourListMock);

    return (
        <BrowserRouter>
            {/* paused for now <FirebaseContext.Provider value={{ user, firebase }}> */}
            <Header />
            <Switch>
                <Route
                    exact
                    path="/"
                    render={() => <HomePage tours={tours} />}
                />
                {tourList.map((path: any) => (
                    <Route
                        key={path}
                        path={`/${path}`}
                        render={(props) => {
                            // @ts-expect-error
                            return <Tour tours={tours} {...props} />;
                        }}
                    />
                ))}
            </Switch>
            <Route path="/admin" component={AdminLog} />
            <Route path="/create-tours" component={ToursCreator} />
            {/* </FirebaseContext.Provider> */}
        </BrowserRouter>
    );
};
export default App;
