import React from 'react';
import { isMobile } from '../../helpers/isMobile';
import Card from './Card/Card';
import { tourMock } from '../../../server/tourMock';

export const TourHomePage = () => {
    const cards = Object.values(tourMock);
    const columns = isMobile(window.screen.availWidth) ? 1 : 5;

    return (
        <div>
            <div style={{ columnCount: columns }}>
                {cards &&
                    cards.map((card, index) => (
                        <Card key={index} card={card} />
                    ))}
            </div>
        </div>
    );
};

export default TourHomePage;
