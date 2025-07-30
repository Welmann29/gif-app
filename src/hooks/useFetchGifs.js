import { useEffect, useState } from 'react';
import { getGifs } from '../helpers/getGifs.js';


export const useFetchGifs = ( category ) => {

    const [images, setImages] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const getImages = async () => {
        const images = await getGifs(category);
        setImages(images);
        setIsLoading(false); 
    }

    useEffect( () => {
        getImages();
    }, []); // Empty dependency array means this effect runs once after the initial render

    return {
        images,
        isLoading
    }

}
