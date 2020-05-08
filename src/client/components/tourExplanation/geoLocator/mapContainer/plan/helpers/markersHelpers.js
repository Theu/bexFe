export const createMarkers = (mapToAdd, pointers) =>
    pointers.map((pointer) => mapToAdd.marker(pointer));

// import React from 'react';
// import ReactDOMServer from 'react-dom/server';
// import Pointers from '../../pointers/Pointers';

// export const createPointer = (
//     pointOfInterest,
//     containerObject,
//     mapInstance,
//     target,
// ) => {
//     const markerOption = (title) => ({
//         alt: title,
//         title: title,
//     });
//     // TODO: create componet for popup (is popup the correct one)
//     const generatedPoI = pointOfInterest.map((singlePoint) =>
//         mapInstance
//             .marker(
//                 {
//                     lat: singlePoint.lat,
//                     lng: singlePoint.lon,
//                 },
//                 markerOption(singlePoint.title),
//             )
//             .addTo(containerObject),
//     );

//     // generatedPoI.forEach((single) => {
//     //     const _latlngObject = single._latlng;
//     //     single._icon.id = `${_latlngObject.lat}_${_latlngObject.lng}`;
//     // });

//     // generatedPoI.forEach((single) => {
//     //     if (single._icon.id === target) {
//     //         single.openPopup();
//     //     }
//     // });

//     return generatedPoI;
// };
