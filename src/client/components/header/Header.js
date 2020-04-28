import React from 'react';
import logo from '../../assets/berlinoexplorer.png';
import Menu from './menu/Menu';
import styles from './header.module.scss';

const BEX_MENU = [
    'log in',
    'ABOUT US',
    'ITINERARI',
    'BLOG',
    'PROJECTS',
    'CONTATTI',
];
const Header = () => (
    <header className={styles.headerWrapper}>
        <img src={logo} alt="Berlino Explorer" />
        <div className={styles.navigationWrapper}>
            <Menu menuList={BEX_MENU} />
            <div className={styles.search} />
        </div>
    </header>
);

export default Header;
