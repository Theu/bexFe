
import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from '../modules/coords/reducer';

const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;