import React from 'react';
import styles from './pointers.module.scss';

const Pointers = ({ interest }) => {
    if (interest.img) {
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
};

export default Pointers;
