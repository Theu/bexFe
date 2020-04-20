export const createMapContainer = (lat, long, zoom, mapInstance) => ({
  center: [lat, long],
  zoom: zoom,
  layers: [
    mapInstance.tileLayer("http://{s}.tile.osm.org/{z}/{x}/{y}.png", {
      attribution:
        '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
    }),
  ],
});

export const createPointers = (
  pointOfInterest,
  customIcon,
  containerObject,
  mapInstance
) => {
  const markerIcon = !!customIcon
    ? {
        icon: customIcon,
      }
    : null;

  return pointOfInterest.map((singlePoint) =>
    mapInstance
      .marker({ lat: singlePoint.lat, lng: singlePoint.lon }, markerIcon)
      .addTo(containerObject)
      .bindPopup(singlePoint.title)
  );
};