import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { getCoords } from '../../../../redux/modules/coords/actions';
import { tooglePanel } from '../../../../redux/modules/panel/actions';
import { createMapContainer, extractBound } from './helpers/mapHelpers';
import {
    createFreeMarkers,
    createToPayMarkers,
} from './helpers/markersHelpers';
import styles from './mapRender.module.scss';

const MapRender = (props) => {
    const {
        targetMap,
        getCoords,
        tooglePanel,
        tourInformation,
        width,
        height,
    } = props;
    const { pointOfInterest } = tourInformation;
    const isDad = document.URL.includes('?dad');

    const bounds = extractBound(pointOfInterest);
    const freeBounds = isDad ? bounds : bounds.slice(0, 2);
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
        {!isDad && createToPayPointers(container, toPayBounds)};
    };
    const containerInit = targetMap.DomUtil.get('map');

    useEffect(() => initializeMap(containerInit));

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
