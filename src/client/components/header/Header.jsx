import React from 'react';
import { Link } from 'react-router-dom';
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
    <div className={styles.headerWrapper}>
        <Link to="/">
            <img src={logo} alt="Berlino Explorer" className={styles.logo} />
        </Link>
        <div className={styles.navigationWrapper}>
            <Menu menuList={BEX_MENU} />
            <div className={styles.search} />
        </div>
    </div>
);

export default Header;
