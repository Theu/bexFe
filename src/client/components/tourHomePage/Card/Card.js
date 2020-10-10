import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import styles from './card.module.scss';

const Card = (props) => {
    const { tourName, tourCover } = props.card;
    const cover = require(`../../../assets/${tourName}/cover.jpeg`);

    return (
        <Link key={`${tourName}`} to={`${tourName}`}>
            <div className={styles.card}>
                <img
                    src={cover}
                    className={styles.image}
                />
                <div className={styles.cardText}>
                    <p className={styles.cardTitle}>
                        {props.card.tourCover.titleTest}
                    </p>
                    <p className={styles.cardIntroText}>
                        {tourCover.tourCard}
                    </p>
                </div>
            </div>
        </Link>
    );
};

export default Card;
