import React from 'react';
import { connect } from 'react-redux';
import { isMobile } from '../../../helpers/isMobile';
import { getCoords } from '../../../redux/modules/coords/actions';
import { toglePanel } from '../../../redux/modules/panel/actions';
import InfoPoint from './information/InfoPoint';
import styles from './message.module.scss';
import { SinglePointOfInterest, Coordinates } from '../../types/types';
// TODO info should stay in a controller container?

interface MessageProps {
    onClickClose: () => void;
    onClickOpenInfo: () => void;
    getCoords: (args1: Coordinates | any) => void;
    tour: string;
    pointOfInterest: SinglePointOfInterest[];
    width: number;
    isDad: boolean;
    showInfo: boolean;
    panel: boolean;
    tourDisplay: any;
    coord: Coordinates;
}

const Message: React.FC<MessageProps> = ({
    onClickClose,
    onClickOpenInfo,
    showInfo,
    panel,
    coord,
    tour,
    pointOfInterest,
    getCoords,
    tourDisplay,
    width,
    isDad,
}: MessageProps) => {
    console.log('-----------------------------');
    console.log('onClickClose', onClickClose);
    console.log('onClickOpenInfo', onClickOpenInfo);
    console.log('showInfo', showInfo);
    console.log('panel', panel);
    console.log('coord', coord);
    console.log('tour', tour);
    console.log('pointOfInterest', pointOfInterest);
    console.log('getCoords', getCoords);
    console.log('tourDisplay', tourDisplay);
    console.log('width', width);
    console.log('isDad', isDad);
    console.log('-----------------------------');

    const payMessage = !coord;
    const wrapperStyle =
        panel || showInfo ? styles.messageWrapper : styles.hide;
    const infoStile = !panel ? styles.info : styles.hide;
    const getCoordsForIndicator = (coord: any) => {
        getCoords(coord);
    };
    const createPointsList = () =>
        pointOfInterest.map((point: any, index: any) => {
            const coord = {
                lat: point.lat,
                lng: point.lon,
            };
            return (
                <li
                    key={`${index}_${point.lat}`}
                    onClick={() => getCoordsForIndicator(coord)}
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
                {payMessage && (
                    <div>
                        <p className={styles.introTitle}>
                            Come vedere questo contenuto
                        </p>
                        <p className={styles.introText}>Paga!!</p>
                    </div>
                )}
                {!!tourDisplay && (
                    <InfoPoint
                        isMobile={isMobile(width)}
                        mobileImgWidth={width - 20}
                        interest={tourDisplay}
                        tourName={tour}
                        pointsLength={tourDisplay.imgCount}
                        isDad={isDad}
                    />
                )}
                {!payMessage && !tourDisplay && <MapPointers />}
            </div>
            {!showInfo && (
                <div className={infoStile} onClick={onClickOpenInfo}>
                    info
                </div>
            )}
        </>
    );
};
const mapDispatchToProps = { getCoords, toglePanel };
export default connect(null, mapDispatchToProps)(Message);
