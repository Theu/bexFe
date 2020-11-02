import React from 'react';
import { tourMock } from '../../../../server/tourMock';
import { useWindowSize } from '../../../hooks/detectWindowSizes';
import { isMobile } from '../../../helpers/isMobile';
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
}) => {
    const { pointOfInterest } = tourMock[tour];
    const tourDisplay = pointOfInterest.find(
        (o) => o.lat === coord.lat && o.lon === coord.lng,
    );
    const wrapperStyle =
        panel || showInfo ? styles.messageWrapper : styles.hide;
    const infoStile = !panel ? styles.info : styles.hide;
    const [width] = useWindowSize();

    return (
        <>
            <div className={wrapperStyle}>
                <div onClick={onClickClose} className={styles.closeIntro}>
                    close [X]
                </div>
                {!!tourDisplay ? (
                    <InfoPoint
                        isMobile={isMobile(width)}
                        mobileImgWidth={width - 20}
                        interest={tourDisplay}
                        tourName={tour}
                        pointsLength={tourDisplay.imgCount}
                    />
                ) : (
                    <div>
                        <p className={styles.introTitle}>Come usare la mappa</p>
                        <p className={styles.introText}>
                            Seleziona un indicatore per leggere la descrizione
                        </p>
                    </div>
                )}
            </div>
            {!showInfo && (
                <div className={infoStile} onClick={onClickOpenInfo}>
                    info
                </div>
            )}
        </>
    );
};

export default Message;
