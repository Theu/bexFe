import styled from 'styled-components';
import { galleryBackground, maxDesktop, overMap } from '../../styles/variables';

export const Wrapper = styled.div`
    display: flex;
    max-width: ${maxDesktop};
    margin: 0 auto;
    height: 80vh;
    padding: 5px;
`;

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
