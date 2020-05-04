import React, { useEffect, useReducer } from 'react';
import L from 'leaflet';
import { tourMock } from '../../../../../../server/tourMock';
import { useStateValue } from './../../../../../stateManager/stateProvider';
import { createMapContainer, createPointers } from './helpers';
import styles from './mapRender.module.scss';

const { pointOfInterest } = tourMock;
// move this outside
const extractBound = (array) => array.map((single) => [single.lat, single.lon]);
const myBounds = extractBound(pointOfInterest);
const MapRender = ({ lat, long, zoom }) => {
    const [{ target }, dispatch] = useStateValue();

    const mapBuilder = {
        mapHolder: null,
        pointerHolder: null,
    };

    let mapContainer = mapBuilder.mapHolder;

    const initializeMap = () => {
        const container = L.DomUtil.get('map');
        if (container != null) {
            container._leaflet_id = null;
        }
        mapContainer = L.map(
            'map',
            createMapContainer(lat, long, zoom, L),
        ).fitBounds(myBounds);
    };

    const addPointersToMap = () =>
        createPointers(pointOfInterest, mapContainer, L, target.value);

    useEffect(initializeMap);

    useEffect(() => {
        addPointersToMap();
    });

    return <div id="map" className={styles.mapWrapper} />;
};

export default MapRender;
