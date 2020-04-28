import React from 'react';
import PropTypes from 'prop-types';
import MapRender from './MapRender';

const PlanContainer = ({ map }) => {
    console.log('map', map);
    return (
        <MapRender lat={map.center[0]} long={map.center[1]} zoom={map.zoom} />
    );
};

PlanContainer.propTypes = {
    map: PropTypes.object.isRequired,
};

export default PlanContainer;
