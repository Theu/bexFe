import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { isMobile } from '../../../../helpers/isMobile';
import { useWindowSize } from '../../../../hooks/detectWindowSizes';

import { getCoords } from '../../../../redux/modules/coords/actions';
import { tooglePanel } from '../../../../redux/modules/panel/actions';
import { createMapContainer, extractBound } from './helpers/mapHelpers';
import {
    createMarkers,
    createFreeMarkers,
    createToPayMarkers,
} from './helpers/markersHelpers';
import styles from './mapRender.module.scss';

const MapRender = ({ targetMap, getCoords, tooglePanel, tourInformation }) => {
    const { pointOfInterest } = tourInformation;

    const containerInit = targetMap.DomUtil.get('map');

    console.log('containerInit :>> ', containerInit);

    const bounds = extractBound(pointOfInterest);
    const freeBounds = bounds.slice(0, 2);
    const toPayBounds = bounds.slice(2);

    const createFreePointers = (container, bounds) =>
        targetMap
            .featureGroup(createFreeMarkers(targetMap, bounds))
            .eachLayer(function (layer) {
                layer.on('click', function (ev) {
                    tooglePanel(true);
                    getCoords(ev.latlng);
                });
            })
            .addTo(container);

    const createToPayPointers = (container, bounds) =>
        targetMap
            .featureGroup(createToPayMarkers(targetMap, bounds))
            .eachLayer(function (layer) {
                layer.on('click', function (ev) {
                    tooglePanel(true);
                    getCoords();
                });
            })
            .addTo(container);

    const initializeMap = (container) => {
        container = targetMap
            .map('map', createMapContainer(targetMap))
            .fitBounds(bounds, {
                padding: [25, 25],
            });

        createFreePointers(container, freeBounds);
        createToPayPointers(container, toPayBounds);
    };

    useEffect(() => initializeMap(containerInit), []);


    const [detectedWidth, detectedHeight] = useWindowSize();
    const width = isMobile(detectedWidth) ? detectedWidth : 1000;
    const height = isMobile(detectedWidth) ? detectedHeight : 756;

    console.log('RENDER');
    return (
        <div
            id="map"
            width={width}
            height={height}
            className={styles.mapWrapperMobile}
        />
    );
};

MapRender.propTypes = {
    targetMap: PropTypes.object,
    tour: PropTypes.string,
};

const mapDispatchToProps = { getCoords, tooglePanel };

export default connect(null, mapDispatchToProps)(MapRender);
