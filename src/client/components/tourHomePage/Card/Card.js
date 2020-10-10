import React from 'react';
import { Link } from 'react-router-dom';
import styles from './card.module.scss';

const Card = (props) => (
    <Link
        key={`${props.card.tourName}`}
        to={`${props.card.tourName}`}
    >
        <div className={styles.card}>
            <img src={props.card.tourCover.coverImg} className={styles.image} />
            <div className={styles.cardText}>
                <p className={styles.cardTitle}>
                    {props.card.tourCover.titleTest}
                </p>
                <p className={styles.cardIntroText}>
                    {props.card.tourCover.tourCard}
                </p>
            </div>
        </div>
    </Link>
);

export default Card;
