import React from 'react';
import L from 'leaflet';
import PropTypes from 'prop-types';
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
