import React from 'react';
import { render } from 'react-dom';

import store from './client/redux/store/configureStore';
import { Provider } from 'react-redux';

import * as serviceWorker from './serviceWorker';

import { tourMock } from '../src/server/tourMock';

import App from './App';
import './index.scss';

const tourList = Object.keys(tourMock);

render(
    <React.StrictMode>
        <Provider store={store}>
            <App />
        </Provider>
    </React.StrictMode>,
    document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
