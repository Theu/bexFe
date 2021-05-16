import React from 'react';
import { connect } from 'react-redux';
import { isMobile } from '../../../helpers/isMobile';
import { getCoordinates } from '../../../redux/modules/coords/actions';
import { toglePanel } from '../../../redux/modules/panel/actions';
import PointGallery from './pointGallery/PointGallery';
import styles from './pointExplanation.module.scss';
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
    const wrapperStyle =
        panel || showInfo ? styles.pointExplanationWrapper : styles.hide;
    const infoStile = !panel ? styles.info : styles.hide;
    console.log('wrapperStyle :>> ', panel || showInfo);
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
            <p className={styles.introTitle}>
                Seleziona un indicatore per leggere la descrizione
            </p>
            <ul>{createPointsList()}</ul>
        </div>
    );
    return (
        <>
            <div className={wrapperStyle}>
                <div onClick={onClickClose} className={styles.closeIntro}>
                    close [X]
                </div>
                {payPointExplanation && (
                    <div>
                        <p className={styles.introTitle}>
                            Come vedere questo contenuto
                        </p>
                        <p className={styles.introText}>Paga!!</p>
                    </div>
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
            </div>
            {!showInfo && (
                <div className={infoStile} onClick={onClickOpenInfo}>
                    info
                </div>
            )}
        </>
    );
};

const mapDispatchToProps = { getCoordinates, toglePanel };

export default connect(null, mapDispatchToProps)(PointExplanation);
