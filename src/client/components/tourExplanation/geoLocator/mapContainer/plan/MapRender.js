import React, { useEffect, useState } from 'react';
import Message from '../../../message/Message';
import { tourMock } from '../../../../../../server/tourMock';
import { createMapContainer, extractBound } from './helpers/mapHelpers';
import { createMarkers } from './helpers/markersHelpers';
import styles from './mapRender.module.scss';

const { pointOfInterest } = tourMock;

const mapBounds = extractBound(pointOfInterest);

const MapRender = ({ targetMap, lat, long, zoom }) => {
    const mapFromLeaflet = createMapContainer(lat, long, zoom, targetMap);
    const containerInit = targetMap.DomUtil.get('map');
    const MARKERS = createMarkers(targetMap, mapBounds);

    const [isPanelOpen, setIsPanelOpen] = useState(true);
    const onClickToggle = () => {
        console.log('click');
        setIsPanelOpen(!isPanelOpen);
    };
    const initializeMap = (container, markers) => {
        if (container != null) {
            container._leaflet_id = null;
        }
        container = targetMap.map('map', mapFromLeaflet).fitBounds(mapBounds);

        targetMap
            .featureGroup(markers)
            .eachLayer(function (layer) {
                layer.on('click', function (ev) {
                    onClickToggle();
                    console.log('EEEE', ev);
                });
            })
            .addTo(container);
    };

    useEffect(() => initializeMap(containerInit, MARKERS));

    return (
        <div id="map" className={styles.mapWrapper}>
            <Message onClickToggle={onClickToggle} show={isPanelOpen} />
        </div>
    );
};

export default MapRender;
