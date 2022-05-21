import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from './client/components/header/Header';
import HomePage from './client/components/HomePage/HomePage';
import Tour from './client/components/tour/Tour';
import './index.scss';
import { useTours } from 'client/hooks/useTour';

const App = () => {
    const [tours, isLoading] = useTours();

    if (isLoading) return <p>Loading...</p>;

    // @ts-ignore
    const tourList = tours.map(({ tourName }) => tourName);

    return (
        <BrowserRouter>
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
                        render={() => {
                            return (
                                <Tour
                                    tours={tours}
                                    tourName={path}
                                />
                            );
                        }}
                    />
                ))}
            </Switch>
        </BrowserRouter>
    );
};
export default App;
