const createReducer = (actionHandlers, initialState) => (state = initialState, action) => {
    const handler = actionHandlers[action.type];

    // if we have a handler for that action type call it, if not return state;
    return handler ? handler(state, action) : state;
};

export default createReducer;
