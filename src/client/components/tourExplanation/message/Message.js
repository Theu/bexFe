import React from 'react';
import styles from './message.module.scss';

const Message = ({ onClickToggle, show }) => {
    console.log('show', show);
    const wrapperStyle = show ? styles.messageWrapper : styles.hide;
    const infoStile = show ? styles.hide : styles.info;
    return (
        <>
            <div className={wrapperStyle}>
                <div onClick={onClickToggle}>close</div>
            </div>
            <div className={infoStile} onClick={onClickToggle}>
                info
            </div>
        </>
    );
};

export default Message;
