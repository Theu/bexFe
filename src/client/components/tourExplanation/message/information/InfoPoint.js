import React from 'react';
import Slider from '../slider/Slider';
import styles from './infoPoint.module.scss';

const InfoPoint = ({ interest, getTarget }) => {
    if (interest.pointOfInterestCoverImg) {
        return (
            <div className={styles.infoBox}>
                {/* <img
                    src={interest.pointOfInterestCoverImg}
                    alt={interest.title}
                    className={styles.imageWrapper}
                /> */}
                <Slider />
                <div className={styles.title}>{interest.title}</div>
                <div className={styles.text}>{interest.text}</div>
            </div>
        );
    } else {
        return (
            <div onClick={getTarget} className={styles.infoBox}>
                <div className={styles.title}> {interest.title}</div>
                <div className={styles.text}>{interest.text}</div>
            </div>
        );
    }
};

export default InfoPoint;
