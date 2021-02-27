export const initialState = {
    isGalleryOpen: false
}

const galleryReducer = (state = initialState, action) => {
    if (action.type === 'TOGGLE_GALLERY') {
        return {
            ...state,
            isGalleryOpen: action.isGalleryOpen
        }
    }

    return state;
}

export default galleryReducer;
