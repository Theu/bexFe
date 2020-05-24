export const initialState = {
    coords: {}
}

const coordReducer = (state = initialState, action) => {
    if (action.type === 'GET_COORDINATES') {
        return {
            ...state,
            coords: action.coords
        }
    }

    return state;
}

export default coordReducer;
