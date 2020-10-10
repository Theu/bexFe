import React from 'react';
import { isMobile } from '../../helpers/isMobile';
import { useWindowSize } from '../../hooks/detectWindowSizes'
import Card from './Card/Card';
import { tourMock } from '../../../server/tourMock';
import { Container } from './TourHomePage.styles';

export const TourHomePage = () => {
    const cards = Object.values(tourMock);
    const [width] = useWindowSize();
    const columns = isMobile(width) ? 1 : 5;

    return (
        <Container>
            <div style={{ columnCount: columns }}>
                {cards &&
                    cards.map((card, index) => (
                        <Card key={index} card={card} />
                    ))}
            </div>
        </Container>
    );
};

export default TourHomePage;
