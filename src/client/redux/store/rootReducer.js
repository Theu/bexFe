import { combineReducers } from 'redux';
import coordReducer from '../modules/coords/reducer';
import panelReducer from '../modules/panel/reducer';
import sizesReducer from '../modules/clientSizes/reducer';

const rootReducer = combineReducers({
    coords: coordReducer,
    panel: panelReducer,
    sizes: sizesReducer,
});

export default rootReducer;
