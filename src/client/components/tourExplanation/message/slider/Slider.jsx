import React, { useState } from 'react';
import Arrow from './Arrow';

import { SliderWrapper, SliderContent, Slide } from './Slider.styles';

const Slider = ({ images, mobileImgWidth, isMobile, pointsLength }) => {
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

    console.log('mobileImgWidth :>> ', mobileImgWidth);
    console.log('pointsLength :>> ', Number(pointsLength) * mobileImgWidth);

    return (
        <SliderWrapper mobileImgWidth={mobileImgWidth} isMobile={isMobile}>
            <SliderContent
                mobileImgWidth={mobileImgWidth}
                translate={translate}
                transition={TRANSITION_SPEED}
                pointsLength={Number(pointsLength)}
            >
                {images.map((slide, i) => {
                    const path = require(`../../../../assets/${slide}`);

                    return (
                        <Slide
                            isMobile={isMobile}
                            mobileImgWidth={mobileImgWidth}
                            key={slide + i}
                            content={path}
                        />
                    );
                })}
            </SliderContent>
            <Arrow direction="left" handleClick={prevSlide} />
            <Arrow direction="right" handleClick={nextSlide} />
        </SliderWrapper>
    );
};

export default Slider;
