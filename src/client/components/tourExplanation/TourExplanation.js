import React, { useState } from 'react';
// import { useSelector, useDispatch } from 'react-redux';
import { connect, useSelector } from 'react-redux';
import { tooglePanel } from '../../redux/modules/panel/actions';
import { tourMock } from './../../../server/tourMock';

import PlanContainer from './geoLocator/mapContainer/plan/PlanContainer';
import Message from './message/Message';
import styles from './tourExplanation.module.scss';

export const TourExplanation = (props) => {
    // const dispatch = useDispatch();
    const panel = useSelector(state => state.panel.isPanelOpen);
    const coord = useSelector(state => state.coords.coords);
    console.log('coord :>> ', coord);
    const { mapMock } = tourMock;

    console.log('panel :>> ', panel);
    const [isPanelOpen, setIsPanelOpen] = useState(true);
    // const [hasCoord, setCoord] = useState({});
    const onClickToggle = () => {
        console.log('CLICK');
        setIsPanelOpen(!isPanelOpen)
        props.tooglePanel(false)
        // dispatch(tooglePanel(false))
    };

    console.log('panel :>> DOWN', panel);
    console.log('isPanelOpen :>> ', isPanelOpen);

    return (
        <div className={styles.wrapper}>
            <PlanContainer map={mapMock} />
            <Message
                onClickToggle={onClickToggle}
                show={isPanelOpen}
                panel={panel}
                coord={false}
            />
        </div>
    );
};

const mapDispatchToProps = {
    tooglePanel
}


export default connect(null, mapDispatchToProps)(TourExplanation);
