export const createMapContainer = (mapInstance) => ({
    layers: [
        mapInstance.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
            attribution:
                '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
        }),
    ],
});

export const extractBound = (array) =>
    array.map((single) => [single.lat, single.lon]);
