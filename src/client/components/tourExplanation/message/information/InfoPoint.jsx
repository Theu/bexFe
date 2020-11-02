import React from 'react';
import Slider from '../slider/Slider';
import styles from './infoPoint.module.scss';

const InfoPoint = ({ interest, pointsLength, tourName, imgWidth }) => {
    const arrayLengt = [...Array(Number(pointsLength)).keys()];
    const images = arrayLengt.map(
        (index) => `${tourName}/${interest.imgFolderName}/img${index + 1}.jpeg`,
    );

    return (
        <div className={styles.infoBox}>
            <Slider imgWidth={imgWidth} images={images} />
            <div className={styles.title}>{interest.title}</div>
            <div className={styles.text}>{interest.text}</div>
        </div>
    );
};

export default InfoPoint;
