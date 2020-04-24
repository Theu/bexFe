import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import MapRender from './MapRender';

const mapMock = {
    center: [52.519409, 13.38],
    zoom: 13,
};
const PlanContainer = ({ map }) => {
    return (
        <MapRender lat={map.center[0]} long={map.center[1]} zoom={map.zoom} />
    );
};

PlanContainer.propTypes = {
    map: PropTypes.object.isRequired,
};

export default PlanContainer;
