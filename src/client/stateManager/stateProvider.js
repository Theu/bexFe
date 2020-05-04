import React, { createContext, useContext, useReducer } from 'react';

// I assign CONTEXT to StateContext
// StateContext return { provider, consumer }
export const StateContext = createContext();

export const reducer = (state, action) => {
    switch (action.type) {
        case 'showMarker':
            return {
                ...state,
                target: {
                    isClicked: true,
                    value: action.value,
                },
            };
        default:
            return state;
    }
};
export const initialState = {
    target: {
        isClicked: false,
        value: null,
    },
};

export const StateProvider = ({ reducer, initialState, children }) => (
    <StateContext.Provider value={useReducer(reducer, initialState)}>
        {children}
    </StateContext.Provider>
);

export const useStateValue = () => useContext(StateContext);
