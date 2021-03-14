import React from 'react';
import { isMobile } from '../../../helpers/isMobile';
import SliderGallery from '../sliderGallery/SliderGallery';

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
            <SliderGallery
                pointsLength={pointsLength}
                isMobile={isMobile}
                mobileImgWidth={mobileImgWidth}
                images={images}
                isDad={isDad}
                height={height}
            />
        </GalleryWrapper>
    );
};

export default Gallery;
