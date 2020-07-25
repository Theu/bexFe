import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { isMobile } from '../../../helpers/isMobile';
import Card from '../Card/Card';
import { tourMock } from '../../../../server/tourMock';

class MasonryContainer extends Component {
    render() {
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
    }
}

export default MasonryContainer;
