const url = 'https://api.giphy.com/v1/gifs/search?api_key=kU6LITeXgpvgnjka4oP2HG6uyt2E94Dw&q=';

export const getGifs = async (category) => {
    const response = await fetch(`${url}${category}&limit=10`);
    const { data } = await response.json();
    const gifs = data.map( img => ({
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url
    }));
    return gifs;
}