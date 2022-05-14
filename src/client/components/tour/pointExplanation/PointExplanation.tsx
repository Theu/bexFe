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
    Info,
} from './PointExplanation.styles';
import { SinglePointOfInterest, Coordinates } from '../../types/types';
// TODO info should stay in a controller container?

interface PointExplanationProps {
    onClickClose: () => void;
    onClickOpenInfo: () => void;
    getCoordinates: (args1: Coordinates | any) => void;
    tour: string;
    pointOfInterest: SinglePointOfInterest[];
    width: number;
    isDad: boolean;
    showInfo: boolean;
    panel: boolean;
    tourDisplay: any;
    coordinates: Coordinates;
}

const PointExplanation: React.FC<PointExplanationProps> = ({
    onClickClose,
    onClickOpenInfo,
    showInfo,
    panel,
    coordinates,
    tour,
    pointOfInterest,
    getCoordinates,
    tourDisplay,
    width,
    isDad,
}: PointExplanationProps) => {
    const payPointExplanation = !coordinates;
    const displayPointExplanation = panel || showInfo;
    const displayInfo = !panel;
    console.log('panel :>> ', panel);
    console.log('showInfo :>> ', showInfo);
    const getCoordsForIndicator = (coordinates: Coordinates) => {
        getCoordinates(coordinates);
    };

    const createPointsList = () =>
        pointOfInterest.map((point: SinglePointOfInterest, index: number) => {
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
                    {!!tourDisplay && (
                        <PointGallery
                            isMobile={isMobile(width)}
                            mobileImgWidth={width - 20}
                            interest={tourDisplay}
                            tourName={tour}
                            pointsLength={tourDisplay.imgCount}
                            isDad={isDad}
                        />
                    )}
                    {!payPointExplanation && !tourDisplay && <MapPointers />}
                </PointExplanationWrapper>
            )}
            {/* {displayInfo && <Info onClick={onClickOpenInfo}>info</Info>} */}
        </>
    );
};

const mapDispatchToProps = { getCoordinates, toglePanel };

export default connect(null, mapDispatchToProps)(PointExplanation);
