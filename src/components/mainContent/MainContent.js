import React from 'react';
import styles from './mainContent.module.scss';
import Tour from './tour/Tour';
import MapContainer from './map/MapContainer';

const mockTourContent = {
    titleTest: 'Letteratour',
    introText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
}

export const MainContent = () => {
    return (
        <div className={styles.wrapper}>
            this is the main content
            <Tour
                title={mockTourContent.titleTest}
                introText={mockTourContent.introText}
            />
            <MapContainer />
        </div>
)};

export default MainContent;
