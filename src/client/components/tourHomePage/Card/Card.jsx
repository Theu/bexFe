import React from 'react';
import { Link } from 'react-router-dom';
import { Image, CardText, CardTitle, CardIntroText, CardItem } from './Card.styles';

const Card = (props) => {
    const { tourName, tourCover } = props.card;
    const cover = require(`../../../assets/${tourName}/cover.jpeg`);

    return (
        <Link key={`${tourName}`} to={`${tourName}`}>
            <CardItem>
                <Image
                    src={cover}
                />
                <CardText>
                    <CardTitle>
                        {props.card.tourCover.titleTest}
                    </CardTitle>
                    <CardIntroText>
                        {tourCover.tourCard}
                    </CardIntroText>
                </CardText>
            </CardItem>
        </Link>
    );
};

export default Card;
