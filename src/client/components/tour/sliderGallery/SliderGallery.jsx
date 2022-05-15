import React, { useState } from 'react';
import { connect } from 'react-redux';
import { togleGallery } from '../../../redux/modules/gallery/actions';
import Arrow from './Arrow';

import { SliderWrapper, SliderContent, Slide } from './SliderGallery.styles';

const Slider = ({
    images,
    mobileImgWidth,
    isMobile,
    pointsLength,
    isDad,
    togleGallery,
    height
}) => {
    const TRANSITION_SPEED = 0.45;
    const [activeIndex, setActiveIndex] = useState(0);
    const [translate, setTranslate] = useState(0);

    const nextSlide = () => {
        if (activeIndex === images.length - 1) {
            return;
        }
        setActiveIndex(activeIndex + 1);
        setTranslate((activeIndex + 1) * (isMobile ? mobileImgWidth : 300));
    };

    const prevSlide = () => {
        if (activeIndex === 0) {
            return;
        } else {
            setActiveIndex(activeIndex - 1);
            setTranslate((activeIndex - 1) * (isMobile ? mobileImgWidth : 300));
        }
    };

    const openGalleryOnClick = () => {
        togleGallery(true);
    };

    const pathCover = images[0];
    const isMobileWidth = isMobile(window.innerWidth);

    return (
        <>
            <SliderWrapper mobileImgWidth={mobileImgWidth} isMobile={isMobile}>
                {isDad ? (
                    <Slide
                        isMobile={isMobileWidth}
                        mobileImgWidth={mobileImgWidth}
                        content={pathCover}
                        onClick={openGalleryOnClick}
                    />
                ) : (
                    <>
                        <SliderContent
                            mobileImgWidth={mobileImgWidth}
                            translate={translate}
                            transition={TRANSITION_SPEED}
                            pointsLength={Number(pointsLength)}
                        >
                            {images.map((slide, i) => {
                                return (
                                    <Slide
                                        isMobile={isMobileWidth}
                                        mobileImgWidth={mobileImgWidth}
                                        key={slide + i}
                                        content={slide}
                                        height={height}
                                    />
                                );
                            })}
                        </SliderContent>
                        <Arrow direction="left" handleClick={prevSlide} />
                        <Arrow direction="right" handleClick={nextSlide} />
                    </>
                )}
            </SliderWrapper>
        </>
    );
};

const mapDispatchToProps = {
    togleGallery,
};

export default connect(null, mapDispatchToProps)(Slider);
