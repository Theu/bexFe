import React from 'react';
import styles from './message.module.scss';

const Message = ({ onClickToggle, show, coord }) => {
    console.log('show', show);
    console.log('coord', coord);
    const wrapperStyle = show ? styles.messageWrapper : styles.hide;
    const infoStile = show ? styles.hide : styles.info;
    return (
        <>
            <div className={wrapperStyle}>
                <div onClick={onClickToggle}>close</div>
                {!!coord.lat ? <div>{coord.lat}</div> : <div>introduction</div>}
            </div>
            <div className={infoStile} onClick={onClickToggle}>
                info
            </div>
        </>
    );
};

export default Message;
