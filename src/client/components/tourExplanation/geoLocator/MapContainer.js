import React from 'react';
import PropTypes from 'prop-types';
import { tourMock } from '../../../../server/tourMock';
import PlanContainer from './mapContainer/plan/PlanContainer';
import Pointers from './mapContainer/pointers/Pointers';
import styles from './mapContainer.module.scss';

const { pointOfInterest, mapMock } = tourMock;

const MapContainer = () => {
    const pointers = pointOfInterest.map((singlePoi) => {
        return (
            <Pointers
                interest={singlePoi}
                key={`${singlePoi.lat}${singlePoi.lon}`}
            />
        );
    });

    return (
        <div className={styles.wrapper}>
            <PlanContainer map={mapMock} />
            <div className={styles.pointersWrapper}>{pointers}</div>
        </div>
    );
};

MapContainer.propTypes = {};

export default MapContainer;
