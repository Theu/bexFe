import React, { useEffect } from 'react';
import L from 'leaflet';
import bex from '../../../../../assets/berlinoexplorer.png';
import { tourMock } from '../../../../../../server/tourMock';
import { createMapContainer, createPointers } from './helpers';
import styles from './mapRender.module.scss';

const { pointOfInterest } = tourMock;
const MapRender = ({ lat, long, zoom }) => {
    const mapBuilder = {
        mapHolder: null,
        pointerHolder: null,
    };
    const customIcon = L.icon({
        iconUrl: bex,
        iconSize: [64, 20],
        iconAnchor: [17, 46],
    });

    let mapContainer = mapBuilder.mapHolder;

    const initializeMap = () => {
        mapContainer = L.map('map', createMapContainer(lat, long, zoom, L));
    };

    const addPointersToMap = () =>
        createPointers(pointOfInterest, null, mapContainer, L);

    useEffect(initializeMap);

    // this is working but trows an error, chek it out
    useEffect(addPointersToMap);

    return <div id="map" className={styles.mapWrapper} />;
};

export default MapRender;
