import { useState } from "react";

// These values come from the item.js => ItemFormHandler component
const ItemFormHandler = ({name, description, _id, btnText, submit}) => {
    const initialInputs = {name: name || '', description: description || ''}
    const [inputs, setInputs] = useState(initialInputs)

    // Handles input as the user types
    const handleChange = (e) => {
        const {name, value} = e.target
        setInputs(prevInputs => ({...prevInputs, [name]: value}))
    }

    // Handles form submission
    const handleSubmit = (e) => {
        console.log("...in handleSubmit (Item)")
        e.preventDefault()
        submit(inputs, _id);
        setInputs(initialInputs)
    }

    return(
        // Form used for updating an item 
        // When button clicked, calls handleSubmit function above
        <div className="addBox">
            <form onSubmit={handleSubmit}>
            <input
            type='text'
            name='name'
            // Populate the form with the item's name
            value={inputs.name}
            // As you type the value changes
            onChange={handleChange}
            placeholder='Item Name...'/>
            &nbsp;&nbsp;
            <input
            type='text'
            name="description"
            // Populate the form with the item's description
            value={inputs.description}
            // As you type the value changes
            onChange={handleChange}
            placeholder="type..."/>
            &nbsp;&nbsp;
            <button className="add-item">{btnText}</button>
        </form>
        </div>
    )
}

export default ItemFormHandler;