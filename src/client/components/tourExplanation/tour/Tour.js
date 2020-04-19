import React from 'react';
import styles from './tour.module.scss';

export const Tour = ({ title, introText }) => (
    <div>
        <p>
            {title}
        </p>
        <div>
            {introText}
        </div>
    </div>
);

export default Tour;
