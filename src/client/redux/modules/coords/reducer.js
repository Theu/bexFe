export const initialState = {
    coords: {}
}

const rootReducer = (state = initialState, action) => {
    if (action.type === 'GET_COORDINATES') {
        return {
            ...state,
            coords: action.coords
        }
    }

    return state;
}

export default rootReducer;
