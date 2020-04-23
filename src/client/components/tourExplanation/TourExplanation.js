import React from "react";
import Tour from "./tour/Tour";
import { tourMock } from "./../../../server/tourMock";

import MapContainer from "./geoLocator/MapContainer";
import styles from "./tourExplanation.module.scss";

const mockTourContent = tourMock.mockTourContent;

export const TourExplanation = () => {
  return (
    <div className={styles.wrapper}>
      <Tour
        title={mockTourContent.titleTest}
        introText={mockTourContent.introText}
      />
      <MapContainer />
    </div>
  );
};

export default TourExplanation;
