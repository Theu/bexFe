import React from 'react';
import { tourMock } from '../../../../server/tourMock';
import InfoPoint from './information/InfoPoint';
import styles from './message.module.scss';

const { pointOfInterest } = tourMock;

// TODO info should stay in a controller container?
const Message = ({ onClickToggle, show, coord }) => {
    // const tour = pointOfInterest.find(
    //     (o) => o.lat === coord.lat && o.lon === coord.lng,
    // );

    const tour = 'ma che bel castello'
    console.log('tour', tour);
    const wrapperStyle = show ? styles.messageWrapper : styles.hide;
    const infoStile = show ? styles.hide : styles.info;
    return (
        <>
            <div className={wrapperStyle}>
                <div onClick={onClickToggle}>close</div>
                {!!coord.lat ? (
                    <InfoPoint interest={tour} />
                ) : (
                    <div>introduction</div>
                )}
            </div>
            <div className={infoStile} onClick={onClickToggle}>
                info
            </div>
        </>
    );
};

export default Message;
