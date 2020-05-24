import React from 'react';

import { Link } from 'react-router-dom';

import { tourMock } from '../../../server/tourMock';
import Message from '../tourExplanation/message/Message';
import styles from './tourHomePage.module.scss';

export const TourHomePage = () => {
    const tourList = Object.keys(tourMock).map((tourTitle) => (
        <div className={styles.card}>
            <div className={styles.imgSimulator}>
                <Link key={`${tourTitle}`} to={`${tourTitle}`}>
                    {tourTitle}
                </Link>
            </div>

            <div className={styles.title}>
                <Link key={`${tourTitle}`} to={`${tourTitle}`}>
                    {tourTitle}
                </Link>
            </div>
        </div>
    ));

    return <div className={styles.container}>{tourList}</div>;
};

export default TourHomePage;
