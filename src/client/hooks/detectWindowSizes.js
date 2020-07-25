import React, { useLayoutEffect, useState } from 'react';

export const useWindowSize = () => {
    const [size, setSize] = useState([0, 0]);
    // hook from react used to detect DOM mutation
    useLayoutEffect(() => {
        // define a function that (in this case) update state after DOM mutation
        const updateSize = () => {
            setSize([window.innerWidth, window.innerHeight]);
        };

        // attach to window the created function
        window.addEventListener('resize', updateSize);
        // call the function
        updateSize();

        // clean window
        return () => window.removeEventListener('resize', updateSize);
    }, []);

    // return state !!
    return size;
};
