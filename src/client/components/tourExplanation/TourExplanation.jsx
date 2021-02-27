import React, { useState } from 'react';
import { connect, useSelector } from 'react-redux';
import { tourMock } from '../../../server/tourMock';
import { useWindowSize } from '../../hooks/detectWindowSizes';
import { isMobile } from '../../helpers/isMobile';
import { tooglePanel } from '../../redux/modules/panel/actions';
import { toogleGallery } from '../../redux/modules/gallery/actions';
import { getCoords } from '../../redux/modules/coords/actions';

import Gallery from './Gallery/Gallery';
import PlanContainer from './mapContainer/plan/PlanContainer';
import Message from './message/Message';

import { mapDeskHeight } from '../../styles/variables';
import {
    Wrapper
} from './TourExplanation.styles';

export const TourExplanation = (props) => {
    const panel = useSelector((state) => state.panel.isPanelOpen);
    const coord = useSelector((state) => state.coords.coords);
    const isGalleryOpen = useSelector((state) => state.gallery.isGalleryOpen);
    const [isInfoPanel, setInfoPanel] = useState(true);
    const [showInstruction, setShowInstruction] = useState(false);
    // const isDad = document.URL.includes('?dad');
    const isDad = true;
    const height = isMobile(window.innerHeight) ? '80vh' : `${mapDeskHeight}px`;
    const [width] = useWindowSize();

    const onClickClose = () => {
        props.getCoords({});
    };

    const onClickOpenInfo = () => {
        setInfoPanel(true);
    };

    const onClickShowInstruction = () => {
        setShowInstruction(!showInstruction);
    };

    const onClickCloseGallery = () => {
        props.toogleGallery(false);
    };

    const tour = props.location.pathname.substr(1);
    const tourInformation = tourMock.filter(
        (item) => item.tourName === tour,
    )[0];
    const { pointOfInterest } = tourInformation;
    const tourDisplay =
        !!coord &&
        pointOfInterest.find((o) => o.lat === coord.lat && o.lon === coord.lng);

    return (
        <Wrapper>
            <Message
                onClickClose={onClickClose}
                onClickOpenInfo={onClickOpenInfo}
                showInfo={isInfoPanel}
                onClickShowInstruction={onClickShowInstruction}
                showInstruction={showInstruction}
                panel={panel}
                coord={coord}
                tour={tour}
                pointOfInterest={pointOfInterest}
                tourDisplay={tourDisplay}
                width={width}
                isDad={isDad}
            />
            <PlanContainer
                tour={tour}
                tourInformation={tourInformation}
                isDad={isDad}
                tooglePanel={tooglePanel}
                getCoords={getCoords}
            />
            {isGalleryOpen && (
                <Gallery
                    height={height}
                    onClickCloseGallery={onClickCloseGallery}
                    pointOfInterest={pointOfInterest}
                    tourDisplay={tourDisplay}
                    pointsLength={tourDisplay.imgCount}
                    interest={tourDisplay}
                    mobileImgWidth={width - 20}
                    tourName={tour}
                />
            )}
        </Wrapper>
    );
};

const mapDispatchToProps = {
    tooglePanel,
    toogleGallery,
    getCoords,
};

export default connect(null, mapDispatchToProps)(TourExplanation);
