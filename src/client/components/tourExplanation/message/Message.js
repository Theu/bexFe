import React from 'react';
import { tourMock } from '../../../../server/tourMock';

import InfoPoint from './information/InfoPoint';
import styles from './message.module.scss';

// const { pointOfInterest } = tourMock;

// TODO info should stay in a controller container?
const Message = ({ onClickToggle, show, panel, coord }) => {
    // const tour = pointOfInterest.find(
    //     (o) => o.lat === coord.lat && o.lon === coord.lng,
    // );

    const tour = 'ma che bel castello'
    console.log('------------------------------------');
    console.log('show :>> ', show);
    console.log('panel :>> ', panel);
    console.log('------------------------------------');
    console.log('tour', tour);
    const wrapperStyle = (panel && show)||(panel && !show) || (show && !panel) ? styles.messageWrapper : styles.hide;
    const infoStile = (!panel && !show) || (show && !panel) ? styles.info : styles.hide;
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
