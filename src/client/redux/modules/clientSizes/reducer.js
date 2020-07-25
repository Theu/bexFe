export const initialState = {
    clientWidth: null,
    clientHeight: null,
    clientSizes: null,
};

export const sizesReducer = (state = initialState, action) => {
    if (action.type === 'GET_WIDTH') {
        return {
            ...state,
            clientWidth: action.payload,
        };
    }

    if (action.type === 'GET_HEIGHT') {
        return {
            ...state,
            clientHeight: action.payload,
        };
    }

    if (action.type === 'GET_SCREEN') {
        console.log('action :>> ', action);
        return {
            ...state,
            clientSizes: action.clientScreen,
        };
    }

    return state;
};

export default sizesReducer;
