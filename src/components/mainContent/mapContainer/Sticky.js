import React, { useState, useEffect, useRef } from 'react';

import styles from './sticky.module.scss';

const  Sticky = ({child, top}) => {
  const [isSticky, setSticky] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    // Add scroll event when the component is loaded
    window.addEventListener('scroll', handleScroll);
    return () => {
    // Remove scroll event after the component is unmount,
    // like componentWillUnmount()
      window.removeEventListener('scroll', () => handleScroll);
    };
    // Here, we set useEffect() arguments as empty array.
    // This means useEffect() will only run once after component loaded
  }, []);

  const handleScroll = () => {
    // Make sure ref has current attibute and getBoundingClientRect function
    // otherwise, it could cause getBoundingClientRect undefined error.
    if (ref && ref.current && ref.current.getBoundingClientRect()) {
        // Then, we compare the distance of the ref component to the top
        // with top value we set. If less than, we set isStick ture.
        setSticky(ref.current.getBoundingClientRect().top <= top);
        // console.log('ref.current.getBoundingClientRect().top :', ref.current.getBoundingClientRect().top);
        // console.log('ref.current.getBoundingClientRect().top <= top :', ref.current.getBoundingClientRect().top <= top);
        // setSticky(true);
    }
  };

  return (
      <div className={`${styles.sticky__wrapper} ${isSticky && styles.sticky}`} ref={ref}>
        <div className={styles.sticky__inner}>
            {child}
        </div>
      </div>
  );
};

export default Sticky
