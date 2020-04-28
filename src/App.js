import React from 'react';
import { StateProvider } from './client/stateManager/stateProvider';
import Header from './client/components/header/Header';
import TourExplanation from './client/components/tourExplanation/TourExplanation';
import styles from './app.module.scss';

const App = () => {
    const initialState = {
        target: {
            isClicked: false,
            value: null,
        },
    };
    const reducer = (state, action) => {
        switch (action.type) {
            case 'showMarker':
                return {
                    ...state,
                    target: {
                        isClicked: true,
                        value: action.value,
                    },
                };
            default:
                return state;
        }
    };
    return (
        <StateProvider initialState={initialState} reducer={reducer}>
            <div className={styles.mainWrapper}>
                <div className={styles.content}>
                    <Header />
                    <TourExplanation />
                </div>
            </div>
        </StateProvider>
    );
};

export default App;
