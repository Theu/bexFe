import React from "react";
import PropTypes from "prop-types";

import PlanContainer from "./mapContainer/plan/PlanContainer";
import Pointers from "./mapContainer/pointers/Pointers";
import styles from "./mapContainer.module.scss";

const MapContainer = (props) => {
  return (
    <div className={styles.wrapper}>
      <PlanContainer />
      <Pointers />
    </div>
  );
};

MapContainer.propTypes = {};

export default MapContainer;
