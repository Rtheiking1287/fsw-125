import { useState } from "react";

// These values come from the item.js => ItemFormHandler component
const SearchFormHandler = ({name, position, _id, btnText, submit}) => {
    const initialInputs = {name: name || '', position: position || ''}
    const [inputs, setInputs] = useState(initialInputs)

    // Handles input as the user types
    const handleChange = (e) => {
        const {name, value} = e.target
        setInputs(prevInputs => ({...prevInputs, [name]: value}))
    }

    // Handles form submission
    const handleSubmit = (e) => {
        e.preventDefault()
        submit(inputs, _id);
        setInputs(initialInputs)
    }

    return(
        // Form used for searching for an item by name
        // When button clicked, calls handleSubmit function above
    <div className="searchBox">
        <form onSubmit={handleSubmit}>
            <p>Search (by name):&nbsp;&nbsp;
                <input
                type='text'
                name='name'
                // As you type the value changes
                onChange={handleChange}
                placeholder='Player Name...'/>
                &nbsp;&nbsp;
                <button className="add-item">{btnText}</button>
                </p>
            </form>
        </div>

    )
}

export default SearchFormHandler;