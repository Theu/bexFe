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

export const IntroTitle = styled.p`
    color: ${baseTitle49};
    font-size: 19px;
    font-weight: 300;
    border-bottom: 1px solid ${baseOcra};
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

export const Info = styled.div`
    width: 25px;
    height: 25px;
    margin: 5px auto;
    padding: 5px;
    background-color: white;
    position: absolute;
    left: 18px;
    top: 200px;
    z-index: ${overMap};
    border-radius: 5px;
`;
