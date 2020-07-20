import React from 'react';

import { ArrowContainer } from './Arrow.styles';

const Arrow = ({ direction, handleClick }) => {

    console.log('direction :>> ', direction);
    return (
        <ArrowContainer direction={direction} onClick={handleClick}>
            {direction === 'right' ? '>' : '<'}
        </ArrowContainer>
    );
};

export default Arrow;
