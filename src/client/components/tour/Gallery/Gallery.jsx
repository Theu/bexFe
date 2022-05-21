import React from 'react';
import { isMobile } from '../../../helpers/isMobile';
import SliderGallery from '../sliderGallery/SliderGallery';

import { GalleryWrapper, CloseGallery } from './Gallery.styles';

export const Gallery = (props) => {
    const {
        height,
        onClickCloseGallery,
        images,
        mobileImgWidth,
        isDad,
    } = props;
    const imagesNumber = images.length;

    return (
        <GalleryWrapper height={height}>
            <CloseGallery onClick={onClickCloseGallery}>CLOSE</CloseGallery>
            <SliderGallery
                pointsLength={imagesNumber}
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
