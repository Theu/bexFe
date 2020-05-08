import React from 'react';
import {
    StateProvider,
    reducer,
    initialState,
} from './client/stateManager/stateProvider';
import Header from './client/components/header/Header';
import TourExplanation from './client/components/tourExplanation/TourExplanation';
import styles from './app.module.scss';

const App = () => {
    return (
        <StateProvider initialState={initialState} reducer={reducer}>
            <div>
                <Header />
                <TourExplanation />
            </div>
        </StateProvider>
    );
};

export default App;
