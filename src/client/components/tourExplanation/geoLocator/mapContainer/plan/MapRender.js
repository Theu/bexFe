import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';

import { getCoords } from '../../../../../redux/modules/coords/actions';
import { tourMock } from '../../../../../../server/tourMock';
import { createMapContainer, extractBound } from './helpers/mapHelpers';
import { createMarkers } from './helpers/markersHelpers';
import styles from './mapRender.module.scss';

const { pointOfInterest } = tourMock;

const mapBounds = extractBound(pointOfInterest);

const MapRender = (props) => {
    const { targetMap, lat, long, zoom, getCoords } = props;
    const mapFromLeaflet = createMapContainer(lat, long, zoom, targetMap);
    const containerInit = targetMap.DomUtil.get('map');
    const MARKERS = createMarkers(targetMap, mapBounds);

    const initializeMap = (container, markers) => {
        if (container != null) {
            container._leaflet_id = null;
        }
        container = targetMap.map('map', mapFromLeaflet).fitBounds(mapBounds);

        targetMap
            .featureGroup(markers)
            .eachLayer(function (layer) {
                layer.on('click', function (ev) {
                    getCoords(ev.latlng);
                });
            })
            .addTo(container);
    };

    useEffect(() => initializeMap(containerInit, MARKERS), []);

    return <div id="map" className={styles.mapWrapper} />;
};

const mapDispatchToProps = { getCoords };

export default connect(null, mapDispatchToProps)(MapRender);
