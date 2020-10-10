import React, { useState } from 'react';
import Arrow from './Arrow';

import { SliderWrapper, SliderContent, Slide } from './Slider.styles';

const Slider = ({ images }) => {
    const TRANSITION_SPEED = 0.45;
    const [activeIndex, setActiveIndex] = useState(0);
    const [translate, setTranslate] = useState(0);

    const nextSlide = () => {
        if (activeIndex === images.length - 1) {
            return;
        }
        setActiveIndex(activeIndex + 1);
        setTranslate((activeIndex + 1) * 300);
    };

    const prevSlide = () => {
        if (activeIndex === 0) {
            return;
        } else {
            setActiveIndex(activeIndex - 1);
            setTranslate((activeIndex - 1) * 300);
        };
    };

    return (
        <SliderWrapper>
            <SliderContent translate={translate} transition={TRANSITION_SPEED}>
                {images.map((slide, i) => {
                    const path = require(`../../../../assets/${slide}`);
                    return (
                    <Slide key={slide + i} content={path} />
                )})}
            </SliderContent>
            <Arrow direction="left" handleClick={prevSlide} />
            <Arrow direction="right" handleClick={nextSlide} />
        </SliderWrapper>
    );
};

export default Slider;
