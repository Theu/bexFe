import styled from 'styled-components';
import { tablet, maxDesktop } from '../../styles/variables';
import { respondFrom } from '../../helpers/screens';

export const Container = styled.div`
    ${respondFrom(tablet)(`
        width: ${maxDesktop}px;
        margin: 0 auto;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
`)}
`;
