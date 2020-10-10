import { combineReducers } from 'redux';
import coordReducer from '../modules/coords/reducer';
import panelReducer from '../modules/panel/reducer';

const rootReducer = combineReducers({
    coords: coordReducer,
    panel: panelReducer,
});

export default rootReducer;
