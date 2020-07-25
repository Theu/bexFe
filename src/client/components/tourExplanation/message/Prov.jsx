import React from 'react';
import { tourMock } from '../../../../server/tourMock';

import InfoPoint from './information/InfoPoint';
import styles from './message.module.scss';

// TODO info should stay in a controller container?
const Message = ({
    onClickClose,
    onClickOpenInfo,
    onClickShowInstruction,
    showInstruction,
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
    let winWidth = Math.max(
        document.documentElement.clientWidth,
        window.innerWidth || 0,
    );
    const isMobile = winWidth <= 414;

    console.log('!tourDisplay :>> ', !tourDisplay);
    console.log('showInstruction :>> ', showInstruction);

    return (
        <>
            <div className={wrapperStyle}>
                {isMobile ? (
                    <div onClick={onClickClose} className={styles.closeIntro}>
                        Chiudi [X]
                    </div>
                ) : (
                    <div onClick={onClickShowInstruction} className={styles.closeIntro}>
                        Come si fa?
                    </div>
                )}
                {!!coord.lat && !!tourDisplay && !showInstruction && (
                    <InfoPoint interest={tourDisplay} />
                )}
                {showInstruction || !tourDisplay && (
                    <div>
                        <p className={styles.introTitle}>Come usare la mappa</p>
                        <p className={styles.introText}>
                            Seleziona un indicatore per leggere la descrizione
                        </p>
                    </div>
                )}
            </div>
            {isMobile && !showInfo && (
                <div className={infoStile} onClick={onClickOpenInfo}>
                    info
                </div>
            )}
        </>
    );
};

export default Message;
