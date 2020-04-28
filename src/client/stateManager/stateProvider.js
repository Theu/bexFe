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
                    value: action.payload,
                },
            };
        default:
            return state;
    }
};

export const StateProvider = ({ reducer, initialState, children }) => (
    <StateContext.Provider value={useReducer(reducer, initialState)}>
        {children}
    </StateContext.Provider>
);

export const useStateValue = () => useContext(StateContext);
