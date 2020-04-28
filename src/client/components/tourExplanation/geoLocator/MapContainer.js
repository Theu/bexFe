import React from 'react';
import PropTypes from 'prop-types';

import PlanContainer from './mapContainer/plan/PlanContainer';
import Pointers from './mapContainer/pointers/Pointers';
import styles from './mapContainer.module.scss';

const MapContainer = ({ tour, clickTarget }) => {
    const { pointOfInterest, mapMock } = tour;
    const pointers = pointOfInterest.map((singlePoi) => {
        const getTargetOnClick = () => {
            clickTarget(`${singlePoi.lat}_${singlePoi.lon}`);
        };
        return (
            <Pointers
                interest={singlePoi}
                getTarget={getTargetOnClick}
                clickTarget={clickTarget}
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

MapContainer.propTypes = {
    tour: PropTypes.object.isRequired,
};

export default MapContainer;
