import React from 'react';
import ReactDOMServer from 'react-dom/server';
import Pointers from '../pointers/Pointers';

export const createMapContainer = (lat, long, zoom, mapInstance) => ({
    center: [lat, long],
    zoom: zoom,
    layers: [
        mapInstance.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
            attribution:
                '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
        }),
    ],
});

export const createPointers = (
    pointOfInterest,
    containerObject,
    mapInstance,
) => {
    const markerOption = (title) => ({
        alt: title,
        title: title,
    });
    // TODO: create componet for popup (is popup the correct one)
    const generatedPoI = pointOfInterest.map((singlePoint) =>
        mapInstance
            .marker(
                {
                    lat: singlePoint.lat,
                    lng: singlePoint.lon,
                },
                markerOption(singlePoint.title),
            )
            .addTo(containerObject)
            .bindPopup(
                ReactDOMServer.renderToString(
                    <Pointers interest={singlePoint} />,
                ),
            ),
    );

    generatedPoI.forEach((single) => {
        const _latlngObject = single._latlng;
        single._icon.id = `${_latlngObject.lat}_${_latlngObject.lng}`;
    });

    return generatedPoI;
};
