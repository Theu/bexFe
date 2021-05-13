import React from 'react';
import { render } from 'react-dom';

import store from './client/redux/store/configureStore';
// mate, do you really need redux for this app?
import { Provider } from 'react-redux';

import App from './App';
import './index.scss';

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root'),
);
