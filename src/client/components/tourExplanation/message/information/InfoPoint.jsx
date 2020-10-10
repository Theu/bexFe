import React from 'react';
import Arrow from '../slider/Arrow';
import Slider from '../slider/Slider';
import styles from './infoPoint.module.scss';

const InfoPoint = ({ interest, pointsLength, tourName }) => {
    console.log('pointsLengt :>> ', pointsLength);
    console.log('interest :>> ', interest);
    const arrayLengt = [...Array(Number(pointsLength)).keys()];
    console.log('arrayLengt :>> ', arrayLengt);
    const images = arrayLengt.map((index) => (`${interest.imgFolderName}/img${index + 1}.jpeg`));

    console.log('images :>> ', images);

    return (
        <div className={styles.infoBox}>
            <Slider images={interest.pointOfInterestGallery} />
            <div className={styles.title}>{interest.title}</div>
            <div className={styles.text}>{interest.text}</div>
        </div>
    );
};

export default InfoPoint;
