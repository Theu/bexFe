import React from 'react';
import L from 'leaflet';
import { isMobile } from '../../../../helpers/isMobile';
import MapRender from './MapRender';

const PlanContainer = (props) => {
    const { tour, tourInformation } = props;
    const targetMap = L;
    const width = isMobile(window.innerWidth) ? window.innerWidth : 1000;
    const height = isMobile(window.innerHeight) ? window.innerHeight : 756;


    return (
        <MapRender
            targetMap={targetMap}
            tour={tour}
            tourInformation={tourInformation}
            width={width}
            height={height}
        />
    );
};

export default PlanContainer;
