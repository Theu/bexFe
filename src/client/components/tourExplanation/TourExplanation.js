import React from 'react';
import { tourMock } from './../../../server/tourMock';
import PlanContainer from './geoLocator/mapContainer/plan/PlanContainer';
import styles from './tourExplanation.module.scss';

export const TourExplanation = () => {
    const { mapMock } = tourMock;
    return (
        <div className={styles.wrapper}>
            <PlanContainer map={mapMock} />
        </div>
    );
};

export default TourExplanation;
