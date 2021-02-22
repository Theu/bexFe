import styled from 'styled-components';
import { galleryBackground, overMap } from '../../../styles/variables';

export const GalleryWrapper = styled.div`
    position: absolute;
    z-index: ${overMap};
    background-color: ${galleryBackground};
    width: calc(100% - 10px);
    height: ${(props) => props.height};
`;

export const CloseGallery = styled.div`
    width: 25px;
    height: 25px;
    background-color: red
`;