import { useState } from "react"
import ItemFormHandler from "./ItemFormHandler"

// Create the item object to be used on the page
const Item = ({editItem, deleteItem, name, description,  _id}) => {

    const [editToggle, setEditToggle] = useState(false)

    // Used to display the item and its details in a list
    return(
        <div className="item">
            { !editToggle ?
                <>
                    {/* Display template for an item */}
                    <p className="medium">{name}</p> 
                    <p className="wide">{description} </p> 
                    <p className="narrow">
                    <button className="delete-btn" onClick={() => deleteItem(_id)}>Delete</button>
                    <button className="edit-btn" onClick={() => setEditToggle(prevToggle => !prevToggle)}>Edit</button>
                    </p> 
                </>
                :
                <>
                    {/* Form used for updating an item */}
                    <ItemFormHandler 
                    name={name}
                    description={description}
                    _id={_id}
                    btnText='Submit'
                    submit={editItem}/>
                    <button className="submit-btn" onClick={() => setEditToggle(prevToggle => !prevToggle)}>Close</button>
                </>
            }   
        </div>
    )
}

export default Item;