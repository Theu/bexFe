import { baseOcra } from '../../../../../styles/variables';

const myCustomColour = '#583470';

const markerHtmlStyles = `
  background-color: ${baseOcra};
  position: absolute;

  border-radius: 50% 50% 50% 0;
  transform: rotate(-45deg);
  border: 8px solid ${baseOcra};
  width: 8px;
  height: 8px;
  `;

const pointerRed = `position: absolute;
content: '';
width: 5px;
height: 5px;
border-radius: 50%;
top: 50%;
left: 50%;
margin-left: -2px;
margin-top: -3px;
background-color: red;`;

const pointer = `position: absolute;
content: '';
width: 5px;
height: 5px;
border-radius: 50%;
top: 50%;
left: 50%;
margin-left: -2px;
margin-top: -3px;
background-color: #fff;`;

const myIcon = (mapToAdd, index) => {
    if (index === 0) {
        return mapToAdd.divIcon({
            className: `${markerHtmlStyles}`,
            html: `<div style="${markerHtmlStyles}"><div style="${pointerRed}" /></div>`,
        });
    } else {
        return mapToAdd.divIcon({
            className: `${markerHtmlStyles}`,
            html: `<div style="${markerHtmlStyles}"></div>`,
        });
    }
};

export const createMarkers = (mapToAdd, pointers) =>
    pointers.map((pointer) => mapToAdd.marker(pointer));

export const createFreeMarkers = (mapToAdd, pointers) =>
    pointers.map((pointer, index) => {
        console.log('index :>> ', index);
        return mapToAdd.marker(pointer, { icon: myIcon(mapToAdd, index) });
    });

export const createToPayMarkers = (mapToAdd, pointers) =>
    pointers.map((pointer) =>
        mapToAdd.marker(pointer, { icon: myIcon(mapToAdd), opacity: 0.7 }),
    );
