import React from 'react';
import { isMobile } from '../../helpers/isMobile';
import { useWindowSize } from '../../hooks/detectWindowSizes';
import Card from './card/Card';
import { tourMock as tour } from '../../../server/tourMock';
import { Container } from './HomePage.styles';

export const HomePage = () => {
    const [width] = useWindowSize();
    const columns = isMobile(width) ? 1 : 5;

    return (
        <Container>
            <div style={{ columnCount: columns }}>
                {tour?.map((card, index) => (
                    <Card key={index} card={card} />
                ))}
            </div>
        </Container>
    );
};

export default HomePage;
