const express = require('express')
const recycledRouter = express.Router()
const { v4: uuidv4 } = require('uuid')

// Create an array of items
// In the future this will be a database
// Create a unique _id for each item using uuidv4
let recycledItems = [
    {"name":"Pizza Box","description":"cardboard","imageURL":"true","quantity":"2","pricePerUnit":"3","recyclable":"true","_id":uuidv4()},
    {"name":"Pepsi Bottle","description":"plastic","recyclable":"true","quantity":"1","price per unit":"1","_id":uuidv4()},
    {"name":"Old Newspaper","description":"paper","recyclable":"true","quantity":"5","price per unit":"2","_id":uuidv4()},
    {"name":"Wine Bottle","description":"glass","recyclable":"true","quantity":"3","price per unit":"3","_id":uuidv4()}
]

// Create the router
recycledRouter

// This will return ALL items
// GET - http://localhost:9000/itemsIntake
.get('/', (req, res) => {
    res.send(recycledItems)
})

// Get teams that match a search term
    // Endpoint: SEARCH - http://localhost:9000/itemsIntake/search
    // SEARCH is not a supported HTTP Verb in Express
    .get('/search/:string', (req, res) => {
        console.log("SEARCHING FOR ITEMS ...")

        // Grab the search term from the URL
        var searchString = req.params.string

        // Look for the name in the array, and find all that match
        const filteredItems = recycledItems.filter(recycledItems => recycledItems.name.toLowerCase().includes(searchString))
        
        // Send back all the matched items from the array
        console.log(filteredItems)
        res.send(filteredItems)
    })

// This will insert ONE item into the recycledItems array
// POST - http://localhost:9000/itemsIntake/
.post('/', (req, res) => {
    const newItem = req.body
    newItem._id = uuidv4()
    recycledItems.push(newItem)
    res.status(200).end()
})
    
    // Add team to the teams array
    // Endpoint: POST - http://localhost:9000/itemsIntake
    .post('/', (req, res) => {
        console.log("CREATING A NEW ITEM ...")
        
        // Grab the new team JSON content from the POST body
        const newItem = req.body
        
        // Add a new field called _id and set it to a unique value
        newItem._id = uuidv4()
        
        // Add the new team to the teams array
        recycledItems.push(newItem)
        
        // Send back the new team
        res.send(newItem)
    })

// This will update ONE item into the recycledItems array based on the ID
// PUT - http://localhost:9000/itemsIntake/<id>
.put('/:id', (req, res) => {
    const itemId = req.params.id
    const itemIndex = recycledItems.findIndex(item => item._id === itemId)
    Object.assign(recycledItems[itemIndex], req.body)
    res.status(200).end()
})

// This will delete ONE item from the recycledItems array based on the ID
// DELETE - http://localhost:9000/itemsIntake/<id>
.delete('/:id', (req, res) => {
    const itemId = req.params.id
    const itemIndex = recycledItems.findIndex(item => item._id === itemId)
    recycledItems.splice(itemIndex, 1)
    res.status(200).end()
})

// Export the router so can be used in the server.js file
module.exports = recycledRouter