export const initialState = {
    isPanelOpen: false
}

const panelReducer = (state = initialState, action) => {
    if (action.type === 'OPEN_PANEL') {
        return {
            ...state,
            isPanelOpen: action.isOpen
        }
    }

    return state;
}

export default panelReducer;
