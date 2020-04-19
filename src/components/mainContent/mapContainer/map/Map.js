import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import MapRender from './MapRender';
import styles from './map.module.scss';

const mapMock = {
	center: [ 52.518409, 13.401063 ],
	zoom: 15,
	zoomControl: true
};
const Map = (props) => {
	return <MapRender lat={mapMock.center[0]} long={mapMock.center[1]} zoom={mapMock.zoom} />;
};

Map.propTypes = {};

export default Map;
