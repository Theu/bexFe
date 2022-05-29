import React from 'react';
import { connect } from 'react-redux';
import { isMobile } from '../../../helpers/isMobile';
import { getCoordinates } from '../../../redux/modules/coords/actions';
import { toglePanel } from '../../../redux/modules/panel/actions';
import PointGallery from './pointGallery/PointGallery';
import {
    GalleryAndExplanationContainerWrapper,
    IntroText,
    CloseIntro,
} from './GalleryAndExplanationContainer.styles';
import { UserSelectedPoints, Coordinates } from 'types';
// TODO info should stay in a controller container?

interface GalleryAndExplanationContainerProps {
    onClickClose: () => void;
    onClickOpenInfo: () => void;
    getCoordinates: (args1: Coordinates | any) => void;
    tour: string;
    tourPointsList: UserSelectedPoints[];
    width: number;
    isDad: boolean;
    showInfo: boolean;
    isGalleryAndExplanationOpen: boolean;
    selectedTour: any;
    coordinates: Coordinates;
}

const GalleryAndExplanationContainer: React.FC<
    GalleryAndExplanationContainerProps
> = ({
    onClickClose,
    onClickOpenInfo,
    showInfo,
    isGalleryAndExplanationOpen,
    coordinates,
    tour,
    tourPointsList,
    getCoordinates,
    selectedTour,
    width,
    isDad,
}: GalleryAndExplanationContainerProps) => {
    const showPayRequest = !coordinates;
    const displayGalleryAndExplanationContainer =
        isGalleryAndExplanationOpen || showInfo;
    const getCoordsForIndicator = (coordinates: Coordinates) => {
        getCoordinates(coordinates);
    };

    const availablePoints = () =>
        tourPointsList.map((point: UserSelectedPoints, index: number) => {
            const coordinatesFromPoint = {
                lat: point.lat,
                lng: point.lon,
            };
            return (
                <li
                    key={`${index}_${point.lat}`}
                    onClick={() => getCoordsForIndicator(coordinatesFromPoint)}
                >
                    {point.title}
                </li>
            );
        });
    const ListOfAvailablePoints = () => (
        <div>
            <IntroText>
                Seleziona un indicatore per leggere la descrizione
            </IntroText>
            <ul>{availablePoints()}</ul>
        </div>
    );

    return (
        <>
            {displayGalleryAndExplanationContainer && (
                <GalleryAndExplanationContainerWrapper>
                    {!!selectedTour && (
                        <CloseIntro onClick={onClickClose}>
                            close [X]
                        </CloseIntro>
                    )}
                    {!showPayRequest && !selectedTour && (
                        <ListOfAvailablePoints />
                    )}
                    {!!selectedTour && (
                        <PointGallery
                            isMobile={isMobile(width)}
                            mobileImgWidth={width - 20}
                            interest={selectedTour}
                            tourName={tour}
                            pointsLength={selectedTour.imgCount}
                            images={selectedTour.images}
                            isDad={isDad}
                        />
                    )}
                </GalleryAndExplanationContainerWrapper>
            )}
        </>
    );
};

const mapDispatchToProps = { getCoordinates, toglePanel };

export default connect(
    null,
    mapDispatchToProps,
)(GalleryAndExplanationContainer);
