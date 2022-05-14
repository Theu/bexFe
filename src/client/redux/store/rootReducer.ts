import { combineReducers } from 'redux';
import coordReducer from '../modules/coords/reducer';
import panelReducer from '../modules/panel/reducer';
import galleryReducer from '../modules/gallery/reducer';

const rootReducer = combineReducers({
    coords: coordReducer,
    panel: panelReducer,
    gallery: galleryReducer,
});

export default rootReducer;
