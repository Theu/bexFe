import React, { useState } from 'react';
import { connect, useSelector } from 'react-redux';
import { useWindowSize } from '../../hooks/detectWindowSizes';
import { isMobile } from '../../helpers/isMobile';
import { toglePanel } from '../../redux/modules/panel/actions';
import { togleGallery } from '../../redux/modules/gallery/actions';
import { getCoordinates } from '../../redux/modules/coords/actions';
import { RootState } from '../../redux/store/configureStore';
import Gallery from './Gallery/Gallery';
import PlanContainer from './mapContainer/plan/PlanContainer';
import PointExplanation from './pointExplanation/PointExplanation';
import { mapDeskHeight } from '../../styles/variables';
import { Wrapper } from './Tour.styles';
import { Coordinates } from '../types/types';

interface TourProps {
    getCoordinates: (arg1: Coordinates | any) => void;
    location: {
        hash: string;
        key: string;
        pathname: string;
        search: string;
        state: any;
    };
    togleGallery: (args1: boolean) => void;
    toglePanel: () => void;
    tours: any;
}

export const Tour: React.FC<TourProps> = ({
    getCoordinates,
    location,
    togleGallery,
    toglePanel,
    tours,
}: TourProps) => {
    const panel = useSelector((state: RootState) => state.panel.isPanelOpen);
    const selectedCoordinates = useSelector(
        (state: RootState) => state.coords.coords,
    );
    const isGalleryOpen = useSelector(
        (state: RootState) => state.gallery.isGalleryOpen,
    );
    const [isInfoPanel, setInfoPanel] = useState(true);
    const [showInstruction, setShowInstruction] = useState(false);
    // const isDad = document.URL.includes('?dad');
    const isDad = true;
    const height = isMobile(window.innerHeight) ? '80vh' : `${mapDeskHeight}px`;
    const [width] = useWindowSize();

    const onClickClose = () => {
        getCoordinates({});
    };

    const onClickOpenInfo = () => {
        setInfoPanel(true);
    };

    // possible future usage
    const onClickShowInstruction = () => {
        setShowInstruction(!showInstruction);
    };

    const onClickCloseGallery = () => {
        togleGallery(false);
    };

    const tour = location.pathname.substr(1);
    const tourInformation = tours.filter(
        (item: any) => item.tourName === tour,
    )[0];
    const { pointOfInterest } = tourInformation;

    const tourDisplay =
        !!selectedCoordinates &&
        pointOfInterest.find(
            (o: any) =>
                o.lat === selectedCoordinates.lat &&
                o.lon === selectedCoordinates.lng,
        );

    return (
        <Wrapper>
            <PointExplanation
                onClickClose={onClickClose}
                onClickOpenInfo={onClickOpenInfo}
                showInfo={isInfoPanel}
                // @ts-ignore possible future usage
                onClickShowInstruction={onClickShowInstruction}
                // @ts-ignore possible future usage
                showInstruction={showInstruction}
                panel={panel}
                coordinates={selectedCoordinates}
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
                toglePanel={toglePanel}
                getCoordinates={getCoordinates}
            />
            {isGalleryOpen && (
                <Gallery
                    height={height}
                    onClickCloseGallery={onClickCloseGallery}
                    pointOfInterest={pointOfInterest}
                    tourDisplay={tourDisplay}
                    // @ts-ignore
                    pointsLength={tourDisplay.imgCount}
                    images={tourDisplay.images}
                    interest={tourDisplay}
                    mobileImgWidth={width - 20}
                    tourName={tour}
                />
            )}
        </Wrapper>
    );
};

const mapDispatchToProps = {
    toglePanel,
    togleGallery,
    getCoordinates,
};

export default connect(null, mapDispatchToProps)(Tour);
