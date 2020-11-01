import React from 'react';
import L from 'leaflet';
import MapRender from './MapRender';

const PlanContainer = ({tour}) => {
    const targetMap = L;
    return (
        <MapRender
            targetMap={targetMap}
            tour={tour}
        />
    );
};

export default PlanContainer;
