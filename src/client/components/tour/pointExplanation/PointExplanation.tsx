import React from 'react';
import { connect } from 'react-redux';
import { isMobile } from '../../../helpers/isMobile';
import { getCoordinates } from '../../../redux/modules/coords/actions';
import { toglePanel } from '../../../redux/modules/panel/actions';
import PointGallery from './pointGallery/PointGallery';
import {
    PointExplanationWrapper,
    IntroText,
    IntroTitle,
    CloseIntro,
    // Info,
} from './PointExplanation.styles';
import { TourPointsList, Coordinates } from 'types';
// TODO info should stay in a controller container?

interface PointExplanationProps {
    onClickClose: () => void;
    onClickOpenInfo: () => void;
    getCoordinates: (args1: Coordinates | any) => void;
    tour: string;
    tourPointsList: TourPointsList[];
    width: number;
    isDad: boolean;
    showInfo: boolean;
    panel: boolean;
    selectedTour: any;
    coordinates: Coordinates;
}

const PointExplanation: React.FC<PointExplanationProps> = ({
    onClickClose,
    // onClickOpenInfo,
    showInfo,
    panel,
    coordinates,
    tour,
    tourPointsList,
    getCoordinates,
    selectedTour,
    width,
    isDad,
}: PointExplanationProps) => {
    const payPointExplanation = !coordinates;
    const displayPointExplanation = panel || showInfo;
    // const displayInfo = !panel;
    const getCoordsForIndicator = (coordinates: Coordinates) => {
        getCoordinates(coordinates);
    };

    const createPointsList = () =>
        tourPointsList.map((point: TourPointsList, index: number) => {
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
    const MapPointers = () => (
        <div>
            <IntroText>
                Seleziona un indicatore per leggere la descrizione
            </IntroText>
            <ul>{createPointsList()}</ul>
        </div>
    );
    return (
        <>
            {displayPointExplanation && (
                <PointExplanationWrapper>
                    <CloseIntro onClick={onClickClose}>close [X]</CloseIntro>
                    {payPointExplanation && (
                        <>
                            <IntroTitle>
                                Come vedere questo contenuto
                            </IntroTitle>
                            <IntroText>Paga!!</IntroText>
                        </>
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
                    {!payPointExplanation && !selectedTour && <MapPointers />}
                </PointExplanationWrapper>
            )}
            {/* {displayInfo && <Info onClick={onClickOpenInfo}>info</Info>} */}
        </>
    );
};

const mapDispatchToProps = { getCoordinates, toglePanel };

export default connect(null, mapDispatchToProps)(PointExplanation);
