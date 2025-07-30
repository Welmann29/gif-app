import { useState } from 'react';
import { AddCategory, GifGrid } from './components';


export const GifExpertApp = () => {

    const [categories, setCategories] = useState([ ]);

    const resetCategories = () => { 
        setCategories([]);
    }

    const onAddCategory = (newCategory) => {
        if (categories.includes(newCategory)) return; // Prevent duplicates

        setCategories([newCategory, ...categories]);
    }

    const deleteCategory = (category) => {
        setCategories(categories.filter(cat => cat !== category));
    }

  return (
    <>
        {/* This is the main component for the Gif Expert App */}
      <h1>GifExpertApp</h1>

      <AddCategory onNewValue={ onAddCategory }  />

      <button onClick={resetCategories}>
        Reset categories
      </button>

        {
            categories.map( category => (
                <GifGrid 
                    key={ category } 
                    category={ category } 
                    deleteCategory={deleteCategory}
                />
            ))
        }
    </>
  );
}