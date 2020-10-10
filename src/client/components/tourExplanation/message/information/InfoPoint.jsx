import React from 'react';
import Slider from '../slider/Slider';
import styles from './infoPoint.module.scss';

const InfoPoint = ({ interest }) => (
    <div className={styles.infoBox}>
        <Slider images={interest.pointOfInterestGallery}/>
        <div className={styles.title}>{interest.title}</div>
        <div className={styles.text}>{interest.text}</div>
    </div>
);

export default InfoPoint;
