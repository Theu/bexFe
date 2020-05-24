import React from 'react';
import { tourMock } from '../../../../server/tourMock';

import InfoPoint from './information/InfoPoint';
import styles from './message.module.scss';

// TODO info should stay in a controller container?
const Message = ({ onClickClose, onClickOpenInfo, showInfo, panel, coord, tour }) => {
    const { pointOfInterest } = tourMock[tour];
    const tourDisplay = pointOfInterest.find(
        (o) => o.lat === coord.lat && o.lon === coord.lng,
    );
    const wrapperStyle =
        panel || showInfo ? styles.messageWrapper : styles.hide;
    const infoStile = !panel ? styles.info : styles.hide;
    return (
        <>
            <div className={wrapperStyle}>
                <div onClick={onClickClose}>close</div>
                {!!coord.lat && !!tourDisplay ? (
                    <InfoPoint interest={tourDisplay} />
                ) : (
                    <div>introduction</div>
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
