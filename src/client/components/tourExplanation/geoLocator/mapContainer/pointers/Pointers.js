import React from 'react';
import styles from './pointers.module.scss';
import { tourMock } from '../../../../../../server/tourMock';

const pof = tourMock.pointOfInterest;

const Pointers = () => {
    const pointOfInterest = pof.map((interest) => {
        if (interest.hasOwnProperty('img')) {
            return (
                <div className={styles.infoBox}>
                    <img
                        src={interest.img}
                        alt={interest.title}
                        className={styles.imageWrapper}
                    />
                    <div className={styles.title}>{interest.title}</div>
                    <div className={styles.text}>{interest.text}</div>
                </div>
            );
        } else {
            return (
                <div className={styles.infoBox}>
                    <div className={styles.title}> {interest.title}</div>
                    <div className={styles.text}>{interest.text}</div>
                </div>
            );
        }
    });

    return <div className={styles.pointersWrapper}>{pointOfInterest}</div>;
};

export default Pointers;
