import { useState } from "react";

// These values come from the item.js => ItemFormHandler component
const ItemFormHandler = ({name, position, _id, btnText, submit}) => {
    const initialInputs = {name: name || '', position: position || ''}
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
            placeholder='Player Name...'/>
            &nbsp;&nbsp;
            <input
            type='text'
            name="position"
            // Populate the form with the item's position
            value={inputs.position}
            // As you type the value changes
            onChange={handleChange}
            placeholder="Position..."/>
            &nbsp;&nbsp;
            <button className="add-item">{btnText}</button>
        </form>
        </div>
    )
}

export default ItemFormHandler;