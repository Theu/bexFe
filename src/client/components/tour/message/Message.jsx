import React from 'react';
import { connect } from 'react-redux';
import { isMobile } from '../../../helpers/isMobile';
import { getCoords } from '../../../redux/modules/coords/actions';
import { toglePanel } from '../../../redux/modules/panel/actions';
import InfoPoint from './information/InfoPoint';
import styles from './message.module.scss';

// TODO info should stay in a controller container?

const Message = ({
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
}) => {

    const payMessage = !coord;
    const wrapperStyle =
        panel || showInfo ? styles.messageWrapper : styles.hide;
    const infoStile = !panel ? styles.info : styles.hide;
    const getCoordsForIndicator = (coord) => {
        getCoords(coord);
    };

    const createPointsList = () =>
        pointOfInterest.map((point, index) => {
            const coord = {
                lat: point.lat,
                lng: point.lon
            }
            return (
                <li
                    key={`${index}_${point.lat}`}
                    onClick={() => getCoordsForIndicator(coord)}
                >
                    {point.title}
                </li>
            );
        });

    const MapPointers = (pointsOfInterest) => (
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
