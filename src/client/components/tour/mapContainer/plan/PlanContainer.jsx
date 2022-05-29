import React from 'react';
import L from 'leaflet';
import { isMobile } from '../../../../helpers/isMobile';
import { mapDeskHeight } from '../../../../styles/variables';
import MapRender from './MapRender';

const PlanContainer = (props) => {
    const { tour, tourInformation, isDad } = props;
    const mapFromLeafLet = L;
    const width = isMobile(window.innerWidth) ? window.innerWidth : 1000;
    const height = isMobile(window.innerHeight) ? window.innerHeight : Number(`${mapDeskHeight}`);

    return (
        <MapRender
            mapFromLeafLet={mapFromLeafLet}
            tour={tour}
            tourInformation={tourInformation}
            width={width}
            height={height}
            isDad={isDad}
        />
    );
};

export default PlanContainer;
