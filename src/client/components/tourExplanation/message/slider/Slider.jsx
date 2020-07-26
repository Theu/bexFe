import React, { useState } from 'react';
import Arrow from './Arrow';

import { SliderWrapper, SliderContent, Slide } from './Slider.styles';

const Slider = ({ images }) => {
    const [state, setState] = useState({
        activeIndex: 0,
        translate: 0,
        transition: 0.45,
        imageSet: images,
    });

    const { translate, transition, activeIndex, imageSet } = state;

    if (imageSet !== images) {
        setState({
            ...state,
            activeIndex: 0,
            translate: 0,
            transition: 0,
            imageSet: images,
        });
    }

    const nextSlide = () => {
        if (activeIndex === images.length - 1) {
            return setState({
                ...state,
                translate: 0,
                activeIndex: 0,
            });
        }

        setState({
            ...state,
            activeIndex: activeIndex + 1,
            translate: (activeIndex + 1) * 300,
        });
    };

    const prevSlide = () => {
        if (activeIndex === 0) {
            return setState({
                ...state,
                translate: (images.length - 1) * 300,
                activeIndex: images.length - 1,
            });
        }

        setState({
            ...state,
            activeIndex: activeIndex - 1,
            translate: (activeIndex - 1) * 300,
        });
    };
    console.log('RENDER', state);
    console.log(imageSet === images);

    return (
        <SliderWrapper>
            <SliderContent translate={translate} transition={transition}>
                {images.map((slide, i) => (
                    <Slide key={slide + i} content={slide} />
                ))}
            </SliderContent>

            <Arrow direction="left" handleClick={prevSlide} />
            <Arrow direction="right" handleClick={nextSlide} />
        </SliderWrapper>
    );
};

export default Slider;
