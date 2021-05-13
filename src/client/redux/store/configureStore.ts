import { createStore } from 'redux';
import rootReducer from './rootReducer';

// type for now but consider Redux removal
const store = createStore(
    rootReducer,
    (window as any).__REDUX_DEVTOOLS_EXTENSION__ &&
        (window as any).__REDUX_DEVTOOLS_EXTENSION__(),
);

export default store;
