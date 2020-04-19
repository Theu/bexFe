import React, { useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";
import MapRender from "./MapRender";

const mapMock = {
  center: [52.519409, 13.38],
  zoom: 13,
};
const PlanContainer = (props) => {
  return (
    <MapRender
      lat={mapMock.center[0]}
      long={mapMock.center[1]}
      zoom={mapMock.zoom}
    />
  );
};

PlanContainer.propTypes = {
  lat: PropTypes.number.isRequired,
  long: PropTypes.number.isRequired,
  zoom: PropTypes.number.isRequired,
};

export default PlanContainer;
