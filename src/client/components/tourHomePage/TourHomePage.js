import React from 'react';

import { Link } from 'react-router-dom';

import MasonryContainer from './Masonry/MasonryContainer';
import { tourMock } from '../../../server/tourMock';
import Message from '../tourExplanation/message/Message';
import styles from './tourHomePage.module.scss';
// https://github.com/jessekorzan/masonry-css-js/blob/master/src/App.js
// https://hackernoon.com/masonry-layout-technique-react-demo-of-100-css-control-of-the-view-e4190fa4296

export const TourHomePage = () => <MasonryContainer />;

export default TourHomePage;
