export const initialState = {
    isPanelOpen: false
}

const panelReducer = (state = initialState, action) => {
    if (action.type === 'TOGGLE_PANEL') {
        return {
            ...state,
            isPanelOpen: action.isPanelOpen
        }
    }

    return state;
}

export default panelReducer;
