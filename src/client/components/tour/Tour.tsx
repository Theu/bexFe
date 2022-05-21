import React, { useState } from 'react';
import { connect, useSelector } from 'react-redux';
import { useWindowSize } from '../../hooks/detectWindowSizes';
import { isMobile } from '../../helpers/isMobile';
import { toglePanel } from '../../redux/modules/panel/actions';
import { getCoordinates } from '../../redux/modules/coords/actions';
import { RootState } from '../../redux/store/configureStore';
import PlanContainer from './mapContainer/plan/PlanContainer';
import PointExplanation from './pointExplanation/PointExplanation';
import { mapDeskHeight } from '../../styles/variables';
import { Wrapper } from './Tour.styles';
import { TourPointsList, Coordinates } from 'types';

interface TourProps {
    getCoordinates: (arg1: Coordinates | any) => void;
    toglePanel: () => void;
    tours: any;
    tourName: string;
}

export const Tour: React.FC<TourProps> = ({
    getCoordinates,
    toglePanel,
    tours,
    tourName,
}: TourProps) => {
    // the info panel
    const panel = useSelector((state: RootState) => state.panel.isPanelOpen);
    const selectedCoordinates = useSelector(
        (state: RootState) => state.coords.coords,
    );

    const [isInfoPanel, setInfoPanel] = useState(true);
    // const isDad = document.URL.includes('?dad');
    const isDad = false;

    const [width] = useWindowSize();

    const onClickClose = () => {
        getCoordinates({});
    };

    const onClickOpenInfo = () => {
        setInfoPanel(true);
    };

    const tourInformation = tours.filter(
        (singleTour: any) => singleTour.tourName === tourName,
    )[0];
    const { tourPointsList } = tourInformation;

    const selectedTour =
        !!selectedCoordinates &&
        tourPointsList.find(
            (singlePoint: TourPointsList) =>
                singlePoint.lat === selectedCoordinates.lat &&
                singlePoint.lon === selectedCoordinates.lng,
        );
    console.log('---------------------');
    console.log('panel :>> ', panel);
    console.log('---------------------');

    return (
        <Wrapper>
            <PointExplanation
                onClickClose={onClickClose}
                onClickOpenInfo={onClickOpenInfo}
                showInfo={isInfoPanel}
                panel={panel}
                coordinates={selectedCoordinates}
                tour={tourName}
                tourPointsList={tourPointsList}
                selectedTour={selectedTour}
                width={width}
                isDad={isDad}
            />
            <PlanContainer
                tour={tourName}
                tourInformation={tourInformation}
                isDad={isDad}
                toglePanel={toglePanel}
                getCoordinates={getCoordinates}
            />
        </Wrapper>
    );
};

const mapDispatchToProps = {
    toglePanel,
    getCoordinates,
};

export default connect(null, mapDispatchToProps)(Tour);
