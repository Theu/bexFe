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
  pointOfInterest: SinglePointOfInterest[]; // change to PointOfInterest from contentful.ts
  tourCover: {
    tourCardTitle: string,
    tourCardIntroText: string
    coverImage: any
  }
}

const Card: React.FC<{card: Card}> = ({card}) => {
    const { tourName, tourCover } = card;
    const { tourCardTitle, tourCardIntroText, coverImage } = tourCover;

    return (
        <Link key={`${tourName}`} to={`${tourName}`}>
            <CardItem>
                <Image src={coverImage} />
                <CardText>
                    <CardTitle>{tourCardTitle}</CardTitle>
                    <CardIntroText>{tourCardIntroText}</CardIntroText>
                </CardText>
            </CardItem>
        </Link>
    );
};

export default Card;
