import React, { useState } from 'react';
// import { useSelector, useDispatch } from 'react-redux';
import { connect, useSelector } from 'react-redux';
import { tooglePanel } from '../../redux/modules/panel/actions';

import PlanContainer from './geoLocator/mapContainer/plan/PlanContainer';
import Message from './message/Message';
import styles from './tourExplanation.module.scss';

export const TourExplanation = (props) => {
    const panel = useSelector(state => state.panel.isPanelOpen);
    const coord = useSelector(state => state.coords.coords);

    const [isInfoPanel, setInfoPanel] = useState(true);
    const onClickClose = () => {
        props.tooglePanel(false)
        setInfoPanel(false)
    };

    const onClickOpenInfo = () => {
        setInfoPanel(true)
    };

    return (
        <div className={styles.wrapper}>
            <Message
                onClickClose={onClickClose}
                onClickOpenInfo={onClickOpenInfo}
                showInfo={isInfoPanel}
                panel={panel}
                coord={coord}
            />
            <PlanContainer />
        </div>
    );
};

const mapDispatchToProps = {
    tooglePanel
}


export default connect(null, mapDispatchToProps)(TourExplanation);
