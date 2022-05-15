import { useEffect, useState } from 'react';
import { getMapBexClient } from 'server/services/contentful';

const getTours = getMapBexClient();

export const useTours = () => {
    const [tours, setTours] = useState([]);
    const [isLoading, setLoading] = useState(true);

    useEffect(() => {
        getTours.then((result: any) => {
            setTours(result);
            setLoading(false);
        });
    }, []);

    return [tours, isLoading];
};