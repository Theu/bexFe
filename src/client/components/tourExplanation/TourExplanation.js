import React, { memo } from 'react';
import { useStateValue } from './../../stateManager/stateProvider';
import Tour from './tour/Tour';
import { tourMock } from './../../../server/tourMock';
import MapContainer from './geoLocator/MapContainer';
import styles from './tourExplanation.module.scss';

const mockTourContent = tourMock.mockTourContent;

export const TourExplanation = () => {
    const [{ target }, dispatch] = useStateValue();

    const testClick = (value) => {
        dispatch({
            type: 'showMarker',
            value,
        });
    };
    return (
        <div className={styles.wrapper}>
            <Tour
                title={mockTourContent.titleTest}
                introText={mockTourContent.introText}
            />
            <MapContainer tour={tourMock} clickTarget={testClick} />
        </div>
    );
};

export default TourExplanation;
