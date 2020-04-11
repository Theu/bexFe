import React from 'react';
import styles from './mainContent.module.scss';
import Tour from './tour/Tour';
import MapContainer from './mapContainer/MapContainer';

const mockTourContent = {
    titleTest: 'Letteratour',
    introText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
}

export const MainContent = () => {
    return (
        <div className={styles.wrapper}>
            <Tour
                title={mockTourContent.titleTest}
                introText={mockTourContent.introText}
            />
            <MapContainer />
        </div>
)};

export default MainContent;
