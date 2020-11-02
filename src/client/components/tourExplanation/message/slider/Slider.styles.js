import styled from 'styled-components';

export const SliderWrapper = styled.div`
    width: ${(props) => props.isMobile ? props.mobileImgWidth : 300}px;
    height: ${(props) => props.isMobile ? props.mobileImgWidth : 300}px;
    position: relative;
    overflow: hidden;
    margin: 0 auto;
`;

export const SliderContent = styled.div`
    width: 3000px;
    /* height: 300px; */
    height: 100%;
    display: flex;
    flex-direction: row;
    transform: translateX(-${(props) => props.translate}px);
    transition: transform ease-out ${(props) => props.transition}s;
`;

export const Slide = styled.div`
    height: ${(props) => props.isMobile ? props.mobileImgWidth : 300}px;
    width: ${(props) => props.isMobile ? props.mobileImgWidth : 300}px;
    background-image: url(${(props) => props.content});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;
`;
