import React from 'react';
import L from 'leaflet';
import PropTypes from 'prop-types';
import MapRender from './MapRender';

const PlanContainer = ({ map }) => {
    const targetMap = L;
    return (
        <MapRender
            targetMap={targetMap}
            lat={map.center[0]}
            long={map.center[1]}
            zoom={map.zoom}
        />
    );
};

PlanContainer.propTypes = {
    map: PropTypes.object.isRequired,
};

export default PlanContainer;
