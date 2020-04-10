import React from 'react'
import PropTypes from 'prop-types'

import Pointers from './pointers/Pointers'
import styles from './mapContainer.module.scss'

const MapContainer = props => {
    return (
        <div className={styles.testWrapper}>
            <div className={styles.wrapper}>
                map
            </div>
            <div className={styles.pointersWrapper}>
            <Pointers />
            <Pointers />
            <Pointers />
            <Pointers />
            </div>
        </div>
    )
}

MapContainer.propTypes = {

}

export default MapContainer
