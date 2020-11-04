import React, { useEffect, useCallback } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { isMobile } from '../../../../helpers/isMobile';
import { useWindowSize } from '../../../../hooks/detectWindowSizes';

import { getCoords } from '../../../../redux/modules/coords/actions';
import { tooglePanel } from '../../../../redux/modules/panel/actions';
import { tourMock } from '../../../../../server/tourMock';
import { createMapContainer, extractBound } from './helpers/mapHelpers';
import { createMarkers } from './helpers/markersHelpers';
import styles from './mapRender.module.scss';

const MapRender = ({ targetMap, getCoords, tooglePanel, tour }) => {
    const { pointOfInterest } = tourMock[tour];
    const containerInit = targetMap.DomUtil.get('map');
    const bounds = extractBound(pointOfInterest);

    const initializeMap = useCallback((container) => {
        if (container != null) {
            container._leaflet_id = null;
        }
        container = targetMap
            .map('map', createMapContainer(targetMap))
            .fitBounds(bounds, {
                padding: [25, 25],
            });

        targetMap
            .featureGroup(
                createMarkers(targetMap, extractBound(pointOfInterest)),
            )
            .eachLayer(function (layer) {
                layer.on('click', function (ev) {
                    tooglePanel(true);
                    getCoords(ev.latlng);
                });
            })
            .addTo(container);
    }, [bounds, getCoords, pointOfInterest, targetMap, tooglePanel]);

    useEffect(() => initializeMap(containerInit), []);

    const [detectedWidth, detectedHeight] = useWindowSize();
    const width = isMobile(detectedWidth) ? detectedWidth : 1000;
    const height = isMobile(detectedWidth) ? detectedHeight : 756;

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
