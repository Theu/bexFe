import React from 'react';
import styles from './menu.module.css';

export const Menu = ({ menuList }) => (
    menuList.map(singleButton => (
        <div className={styles.menuItem}>
            {singleButton}
        </div>
    ))
);

export default Menu;
