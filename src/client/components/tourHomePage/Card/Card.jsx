import React from 'react';
import { Link } from 'react-router-dom';
import {
    Image,
    CardText,
    CardTitle,
    CardIntroText,
    CardItem,
} from './Card.styles';

const Card = ({ card }) => {
    const { tourName, tourCover } = card;
    const { titleTest, tourCard } = tourCover;
    const cover = require(`../../../assets/${tourName}/cover.jpeg`);

    return (
        <Link key={`${tourName}`} to={`${tourName}`}>
            <CardItem>
                <Image src={cover} />
                <CardText>
                    <CardTitle>{titleTest}</CardTitle>
                    <CardIntroText>{tourCard}</CardIntroText>
                </CardText>
            </CardItem>
        </Link>
    );
};

export default Card;
