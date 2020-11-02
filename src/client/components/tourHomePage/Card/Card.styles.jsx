import styled from 'styled-components';
import { baseTitle49, baseText81 } from '../../../styles/variables';
import { tablet } from '../../../styles/variables';
import { respondFrom } from '../../../helpers/screens';

export const CardItem = styled.div`
    position: relative;
    border: 4px solid #f5f3f3;
    background: #fff;
    min-height: 288px;
    width: calc(100% - 8px);
    margin-bottom: 0.8px;
    color: #aca7a7;
    break-inside: avoid;
    page-break-inside: avoid;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    ${respondFrom(tablet)(`
        width: 100%;
    `)}
`;

export const Image = styled.img`
    width: inherit;
`;

export const CardText = styled.div`
    padding: 22px;
`;

export const CardTitle = styled.p`
    color: ${baseTitle49};
    font-size: 19px;
    font-weight: 300;
`;

export const CardIntroText = styled.p`
    font-family: 'NewCycle';
    color: ${baseText81};
    font-size: 17px;
    font-weight: 300;
`;
