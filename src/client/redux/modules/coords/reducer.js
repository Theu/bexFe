import { createReducer } from '../../utils';
import types from './types';

export const initialState = {
    coords: {}
}

const SYNC_ACTION_HANDLERS = {
    [types.GET_COORDINATES]: (state, action) => ({
        ...state,
        coords: action.payload
    })
};

const ACTION_HANDLERS = {
    ...SYNC_ACTION_HANDLERS
}

export default createReducer(ACTION_HANDLERS, initialState);
