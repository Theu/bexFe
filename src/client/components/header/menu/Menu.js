import React from 'react';
import styles from './menu.module.scss';

export const Menu = ({ menuList }) =>
    menuList.map((singleButton, index) => (
        <div key={index} className={styles.menuItem}>
            {singleButton.toUpperCase()}
        </div>
    ));

export default Menu;
