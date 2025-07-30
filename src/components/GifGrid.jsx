import { GifCard } from './GifCard.jsx';
import { useFetchGifs } from '../hooks/useFetchGifs.js';


export const GifGrid = ( { category, deleteCategory } ) => {

    const { images, isLoading } = useFetchGifs(category);

    
  return (
    <>

        <h3>{ category }</h3>
        <button onClick={() => deleteCategory(category)}>Delete</button>
        {
            isLoading && <h2>Loading...</h2>
        }
        <div className="card-grid">
            {
                images.map(image => (
                    <GifCard key={image.id} { ...image } />
                ))
            }
        </div>
    </>
  )
}
