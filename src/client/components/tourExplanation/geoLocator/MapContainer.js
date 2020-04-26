import React from 'react';
import { tourMock } from '../../../../server/tourMock';
import PlanContainer from './mapContainer/plan/PlanContainer';
import Pointers from './mapContainer/pointers/Pointers';
import styles from './mapContainer.module.scss';

const { pointOfInterest, mapMock } = tourMock;

const MapContainer = () => {
    const addTarget = (object) => ({
        ...object,
        get target() {
            return `${this.lat}_${this.lon}`;
        },
    });
    const getTarget = (object) => object.target;
    const pointers = pointOfInterest.map((singlePoi) => {
        const enrichedPoi = addTarget(singlePoi);
        const getTargetOnClick = () => getTarget(enrichedPoi);
        return (
            <Pointers
                interest={enrichedPoi}
                getTarget={getTargetOnClick}
                key={`${enrichedPoi.lat}${enrichedPoi.lon}`}
            />
        );
    });

    return (
        <div className={styles.wrapper}>
            <PlanContainer map={mapMock} />
            <div className={styles.pointersWrapper}>{pointers}</div>
        </div>
    );
};

MapContainer.propTypes = {};

export default MapContainer;
