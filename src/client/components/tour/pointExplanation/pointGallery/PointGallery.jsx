import React from 'react';
import Slider from '../../slider/Slider';
import styles from './infoPoint.module.scss';

const InfoPoint = ({
    interest,
    pointsLength,
    images,
    tourName,
    mobileImgWidth,
    isMobile,
    isDad,
}) => (
    <div className={styles.infoBox}>
        <Slider
            pointsLength={pointsLength}
            isMobile={isMobile}
            mobileImgWidth={mobileImgWidth}
            images={images}
            isDad={isDad}
        />
        <div className={styles.title}>{interest.title}</div>
        <div className={styles.text}>{interest.text}</div>
    </div>
);

export default InfoPoint;
