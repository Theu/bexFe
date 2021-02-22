import React from 'react';
import Slider from '../message/slider/Slider';

import { GalleryWrapper, CloseGallery } from './Gallery.styles';

export const Gallery = (props) => {
    const {
        height,
        onClickCloseGallery,
    } = props;
    return (
        <GalleryWrapper height={height}>
            <CloseGallery onClick={onClickCloseGallery}>CLOSE</CloseGallery>
        </GalleryWrapper>
    );
};

export default Gallery;
