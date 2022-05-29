import React, { useEffect, useRef } from 'react';
import ReactDOMServer from 'react-dom/server';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { getCoordinates } from '../../../../redux/modules/coords/actions';
import { toglePanel } from '../../../../redux/modules/panel/actions';
import { extractBound } from './helpers/mapHelpers';
// import {
//     createFreeMarkers,
//     createToPayMarkers,
//     createSelectedMarker,
// } from './helpers/markersHelpers';
import styles from './mapRender.module.scss';

const MapRender = (props) => {
    const {
        mapFromLeafLet,
        tourInformation,
        width,
        height,
        selectedCoords,
        getCoordinates,
        toglePanel,
    } = props;
    const { tourPointsList } = tourInformation;
    const bounds = extractBound(tourPointsList);
    const createMarkers = (bounds) =>
        bounds.map((point) => ({
            latLng: { lat: point[0], lng: point[1] },
            coords: `${point[0]}_${point[1]}`,
        }));
    const createdMarkers = createMarkers(bounds);
    // const freeBounds = isDad ? bounds : bounds.slice(0, 2);
    // const toPayBounds = bounds.slice(2);

    const mapRef = useRef();
    useEffect(() => {
        mapRef.current = mapFromLeafLet
            .map('map', {
                layers: [
                    mapFromLeafLet.tileLayer(
                        'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
                        {
                            attribution: '',
                        },
                    ),
                ],
            })
            .fitBounds(bounds, {
                padding: [25, 25],
            });
    }, []);

    // add layer
    const layerRef = useRef(null);
    useEffect(() => {
        layerRef.current = mapFromLeafLet.layerGroup().addTo(mapRef.current);
    }, []);

    const selectedMarker = [
        {
            latLng: {
                lat: selectedCoords?.coords.lat,
                lng: selectedCoords?.coords.lng,
            },
            coords: `${selectedCoords?.coords.lat}_${selectedCoords?.coords.lng}`,
        },
    ];

    const openExplanationOnClick = (coords) => {
        toglePanel(true);
        getCoordinates(coords);
    };

    const selectedIcon = mapFromLeafLet.divIcon({
        className: 'selected-icon',
        html: ReactDOMServer.renderToString(
            <div className={styles.selected} />,
        ),
    });

    const baseIcon = mapFromLeafLet.divIcon({
        className: 'base-icon',
        html: ReactDOMServer.renderToString(
            <div className={styles.base} />,
        ),
    });

    const displayMarkers = (marker, selectedMarker) => {
        if (marker.coords === selectedMarker[0]?.coords) {
            mapFromLeafLet
                .marker(marker.latLng, { icon: selectedIcon })
                .on('click', () => {
                    openExplanationOnClick(marker.latLng);
                })
                .addTo(layerRef.current);
        } else {
            mapFromLeafLet
                .marker(marker.latLng, { icon: baseIcon })
                .on('click', () => {
                    openExplanationOnClick(marker.latLng);
                })
                .addTo(layerRef.current);
        }
    };
    // update markers
    useEffect(() => {
        layerRef.current.clearLayers();
        createdMarkers.forEach((marker) => {
            displayMarkers(marker, selectedMarker);
        });
    }, [createdMarkers, selectedMarker]);

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
    mapFromLeafLet: PropTypes.object,
    tour: PropTypes.string,
};

const mapDispatchToProps = { getCoordinates, toglePanel };
const mapStateToProps = (state) => ({
    selectedCoords: getCoordinates(state),
});

export default connect(mapStateToProps, mapDispatchToProps)(MapRender);
