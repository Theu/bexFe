import React, { useState } from 'react';
import { connect, useSelector } from 'react-redux';
import { tooglePanel } from '../../redux/modules/panel/actions';
import { getCoords } from '../../redux/modules/coords/actions';

import PlanContainer from './mapContainer/plan/PlanContainer';
import Message from './message/Message';
import styles from './tourExplanation.module.scss';

export const TourExplanation = (props) => {
    const panel = useSelector(state => state.panel.isPanelOpen);
    const coord = useSelector(state => state.coords.coords);

    const [isInfoPanel, setInfoPanel] = useState(true);
    const [showInstruction, setShowInstruction] = useState(false);

    const onClickClose = () => {
        props.tooglePanel(false)
        props.getCoords({});
        setInfoPanel(false)
    };

    const onClickOpenInfo = () => {
        setInfoPanel(true)
    };

    const onClickShowInstruction = () => {
        setShowInstruction(!showInstruction)
    }

    const tour = props.location.pathname.substr(1)

    return (
        <div className={styles.wrapper}>
            <Message
                onClickClose={onClickClose}
                onClickOpenInfo={onClickOpenInfo}
                showInfo={isInfoPanel}
                onClickShowInstruction={onClickShowInstruction}
                showInstruction={showInstruction}
                panel={panel}
                coord={coord}
                tour={tour}
            />
            <PlanContainer tour={tour} />
        </div>
    );
};

const mapDispatchToProps = {
    tooglePanel,
    getCoords
}


export default connect(null, mapDispatchToProps)(TourExplanation);
