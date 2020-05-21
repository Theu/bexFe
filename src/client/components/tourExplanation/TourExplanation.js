import React, { useState } from 'react';
import { tourMock } from './../../../server/tourMock';
import PlanContainer from './geoLocator/mapContainer/plan/PlanContainer';
import Message from './message/Message';
import styles from './tourExplanation.module.scss';

export const TourExplanation = () => {
    const { mapMock } = tourMock;

    const [isPanelOpen, setIsPanelOpen] = useState(false);
    const [hasCoord, setCoord] = useState({});
    const onClickToggle = () => {
        console.log('CLICK');
        console.log('isPanelOpen :>> ', isPanelOpen);
        setIsPanelOpen(!isPanelOpen);
    };
    return (
        <div className={styles.wrapper}>
            <PlanContainer map={mapMock} />
            <Message
                onClickToggle={onClickToggle}
                show={isPanelOpen}
                coord={hasCoord}
            />
        </div>
    );
};

export default TourExplanation;
