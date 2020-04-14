import React from 'react';
import PropTypes from 'prop-types';

import Map from './map/Map'
import Pointers from './pointers/Pointers';
import Sticky from './Sticky';
import styles from './mapContainer.module.scss';

const MapContainer = props => {
    return (
        <div className={styles.wrapper}>
            <Map />
            {/* <Sticky top={113}>
                <Map />
            </Sticky> */}
            <Pointers />
        </div>
    );
};

MapContainer.propTypes = {

};

export default MapContainer;
