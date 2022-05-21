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
    togleGallery: (args1: boolean) => void;
    toglePanel: () => void;
    tours: any;
    tourName: string;
}

export const Tour: React.FC<TourProps> = ({
    getCoordinates,
    togleGallery,
    toglePanel,
    tours,
    tourName
}: TourProps) => {
    // the info panel
    const panel = useSelector((state: RootState) => state.panel.isPanelOpen);
    const selectedCoordinates = useSelector(
        (state: RootState) => state.coords.coords,
    );
    const isGalleryOpen = useSelector(
        (state: RootState) => state.gallery.isGalleryOpen,
    );
    const [isInfoPanel, setInfoPanel] = useState(true);
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

    const onClickCloseGallery = () => {
        togleGallery(false);
    };

    const tourInformation = tours.filter(
        (item: any) => item.tourName === tourName,
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
                panel={panel}
                coordinates={selectedCoordinates}
                tour={tourName}
                pointOfInterest={pointOfInterest}
                tourDisplay={tourDisplay}
                width={width}
                isDad={isDad}
            />
            <PlanContainer
                tour={tourName}
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
                    tourName={tourName}
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
