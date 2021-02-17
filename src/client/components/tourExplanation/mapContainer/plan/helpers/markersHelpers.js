export const createMarkers = (mapToAdd, pointers) =>
    pointers.map((pointer) => mapToAdd.marker(pointer));

export const createFreeMarkers = (mapToAdd, pointers) =>{
    return pointers.map((pointer) => {
        return mapToAdd.marker(pointer);
    })};

export const createToPayMarkers = (mapToAdd, pointers) =>
    pointers.map((pointer) => mapToAdd.marker(pointer, { opacity: 0.5 }));

export const createSelectedMarker = (mapToAdd, pointer) =>
    mapToAdd.marker(pointer, { opacity: 0.5 });
