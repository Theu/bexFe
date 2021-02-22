import React from 'react';
import { isMobile } from '../../../helpers/isMobile';
import { useWindowSize } from '../../../hooks/detectWindowSizes';
import { getCoords } from '../../../redux/modules/coords/actions';
import Slider from '../slider/Slider';

import { GalleryWrapper, CloseGallery } from './Gallery.styles';

export const Gallery = (props) => {
    const {
        height,
        onClickCloseGallery,
        pointsLength,
        interest,
        mobileImgWidth,
        isDad,
        tourName
    } = props;
    const arrayLengt = [...Array(Number(pointsLength)).keys()];
    const images = arrayLengt.map(
        (index) => `${tourName}/${interest.imgFolderName}/img${index + 1}.jpeg`,
    );

    return (
        <GalleryWrapper height={height}>
            <CloseGallery onClick={onClickCloseGallery}>CLOSE</CloseGallery>
            <Slider
                pointsLength={pointsLength}
                isMobile={isMobile}
                mobileImgWidth={mobileImgWidth}
                images={images}
                isDad={isDad}
            />
        </GalleryWrapper>
    );
};

export default Gallery;
