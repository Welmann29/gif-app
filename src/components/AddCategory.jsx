import { useState } from "react"


export const AddCategory = ({ onNewValue }) => {

    // This component is used to add a new category
    const [inputValue, setInputValue] = useState('');

    const onInputChange = ( {target} ) => {
        // This function updates the input value as the user types
        setInputValue(target.value);
    }

    const onSubmit = (event) => {
        event.preventDefault(); 

        const cleanedValue = inputValue.trim(); // Clean the input value
        if (cleanedValue.length <= 1) return; // Prevent adding empty or short categories

        onNewValue( cleanedValue ); // Add the new category to the list
        setInputValue(''); // Clear the input field after submission

    }

  return (
    <form onSubmit={ onSubmit }>
        <input 
            type="text" 
            placeholder="Buscar GIFs" 
            onChange={ onInputChange } // Sending event by reference 
            value={ inputValue } // Controlled component
        />
    </form>
    
  )
}
