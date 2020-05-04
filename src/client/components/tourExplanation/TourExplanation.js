import React from 'react';
import { useStateValue } from './../../stateManager/stateProvider';
import Tour from './tour/Tour';
import { tourMock } from './../../../server/tourMock';
import MapContainer from './geoLocator/MapContainer';
import styles from './tourExplanation.module.scss';

const mockTourContent = tourMock.mockTourContent;

export const TourExplanation = () => {
    return (
        <div className={styles.wrapper}>
            <MapContainer tour={tourMock} />
        </div>
    );
};

export default TourExplanation;
