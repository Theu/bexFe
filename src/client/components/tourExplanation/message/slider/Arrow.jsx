import React from 'react';

import { ArrowContainer } from './Arrow.styles';

const Arrow = ({ direction, handleClick }) => (
    <ArrowContainer direction={direction} onClick={handleClick}>
        {direction === 'rigth' ? 'R' : 'L'}
    </ArrowContainer>
);

export default Arrow;
