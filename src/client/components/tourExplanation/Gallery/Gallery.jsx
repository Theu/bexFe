import React from 'react';
import { isMobile } from '../../../helpers/isMobile';
import { useWindowSize } from '../../../hooks/detectWindowSizes';
import { getCoords } from '../../../redux/modules/coords/actions';

import { GalleryWrapper, CloseGallery } from './Gallery.styles';

export const Gallery = (props) => {
    const {
        height,
        onClickCloseGallery,
        onClickClose,
        onClickOpenInfo,
        showInfo,
        onClickShowInstruction,
        showInstruction,
        panel,
        coord,
        tour,
        tourInformation,
        isDad,
    } = props;

    return (
        <GalleryWrapper height={height}>
            <CloseGallery onClick={onClickCloseGallery}>CLOSE</CloseGallery>
        </GalleryWrapper>
    );
};

export default Gallery;
