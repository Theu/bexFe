import React from 'react';
import L from 'leaflet';
import MapRender from './MapRender';

const PlanContainer = ({tour, tourInformation}) => {
    const targetMap = L;
    return (
        <MapRender
            targetMap={targetMap}
            tour={tour}
            tourInformation={tourInformation}
        />
    );
};

export default PlanContainer;
