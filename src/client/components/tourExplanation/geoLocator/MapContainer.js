import React from 'react';
import PropTypes from 'prop-types';
import { tourMock } from '../../../../server/tourMock';
import PlanContainer from './mapContainer/plan/PlanContainer';
import Pointers from './mapContainer/pointers/Pointers';
import styles from './mapContainer.module.scss';

const pof = tourMock.pointOfInterest;
const MapContainer = () => {
    const pointers = pof.map((singlePof) => {
        console.log('pof', pof);
        console.log('singlePof', singlePof);

        return <Pointers interest={singlePof} />;
    });

    return (
        <div className={styles.wrapper}>
            <PlanContainer />
            <div className={styles.pointersWrapper}>{pointers}</div>
        </div>
    );
};

MapContainer.propTypes = {};

export default MapContainer;
