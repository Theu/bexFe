import styled from 'styled-components';
import {
    tablet,
    mapDeskHeight,
    overMap,
    baseTitle49,
    baseText81,
    baseOcra,
} from '../../../styles/variables';
import { respondFrom } from '../../../helpers/screens';

export const GalleryAndExplanationContainerWrapper = styled.div`
    position: absolute;
    width: calc(100% - 20px);
    display: flex;
    flex-direction: column;
    // check if doable dinamically TODO
    margin-right: 5px;
    padding: 0 5px;
    background-color: white;
    z-index: ${overMap};
    border-radius: 5px;
    overflow: scroll;

    ${respondFrom(tablet)(`
        position: relative;
        width: 405px;
        margin-right: 5px;
        height: ${mapDeskHeight};
    `)}
`;

export const IntroText = styled.p`
    font-family: 'NewCycle';
    color: ${baseText81};
    font-size: 17px;
    font-weight: 300;
`;

export const CloseIntro = styled.div`
    color: ${baseTitle49};
    font-size: 15px;
    font-weight: 300;
    padding: 5px 0;
`;
