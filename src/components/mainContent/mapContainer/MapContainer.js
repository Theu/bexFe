import React from 'react';
import PropTypes from 'prop-types';

import Map from './map/Map'
import Pointers from './pointers/Pointers';
import styles from './mapContainer.module.scss';

const MapContainer = props => {
    return (
        <div className={styles.wrapper}>
            <Map />
            <Pointers />
        </div>
    );
};

MapContainer.propTypes = {

};

export default MapContainer;
