import React from 'react';
import { Link } from 'react-router-dom';
import { SinglePointOfInterest } from '../../types/types';
import {
    Image,
    CardText,
    CardTitle,
    CardIntroText,
    CardItem,
} from './Card.styles';

interface Card {
  tourName: string,
  pointOfInterest: SinglePointOfInterest[];
  tourCover: {
    tourCardTitle: string,
    tourCardIntroText: string
  }
}

const Card: React.FC<{card: Card}> = ({card}) => {
    const { tourName, tourCover } = card;
    const { tourCardTitle, tourCardIntroText } = tourCover;
    const cover = require(`../../../assets/${tourName}/cover.jpeg`);

    return (
        <Link key={`${tourName}`} to={`${tourName}`}>
            <CardItem>
                <Image src={cover} />
                <CardText>
                    <CardTitle>{tourCardTitle}</CardTitle>
                    <CardIntroText>{tourCardIntroText}</CardIntroText>
                </CardText>
            </CardItem>
        </Link>
    );
};

export default Card;
