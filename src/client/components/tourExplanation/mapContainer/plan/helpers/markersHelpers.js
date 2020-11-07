export const createMarkers = (mapToAdd, pointers) =>
    pointers.map((pointer) => mapToAdd.marker(pointer));

export const createFreeMarkers = (mapToAdd, pointers) =>
    pointers.map((pointer) => mapToAdd.marker(pointer));

export const createToPayMarkers = (mapToAdd, pointers) =>
    pointers.map((pointer) => mapToAdd.marker(pointer, { opacity: 0.5 }));
