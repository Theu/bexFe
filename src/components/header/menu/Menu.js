import React from 'react';
import styles from './menu.module.css';

export const Menu = ({ menuList }) => (
    menuList.map(singleButton => (
        <div className={styles.menuItem}>
            {(singleButton.toUpperCase())}
        </div>
    ))
);

export default Menu;
