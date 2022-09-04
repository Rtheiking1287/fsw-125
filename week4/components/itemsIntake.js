const express = require('express')
const recycledRouter = express.Router()

const {v4:uuidv4 } = require('uuid')

let recycledItems = [
    {"name":"Pizza Box","description":"cardboard box","recyclable":"true","quantity":"2","price per unit":"3","_id":uuidv4()},
    {"name":"Pepsi Bottle","description":"plastic bottle","recyclable":"true","quantity":"1","price per unit":"1","_id":uuidv4()},
    {"name":"Old Newspaper","description":"paper","recyclable":"true","quantity":"5","price per unit":"2","_id":uuidv4()},
    {"name":"Wine Bottle","description":"glass bottle","recyclable":"true","quantity":"3","price per unit":"3","_id":uuidv4()}
]

recycledRouter

// This will return ALL items
// GET - http://localhost:3000/itemsIntake
.get('/', (req, res) => {
    res.send(recycledItems)
})

// This will return ALL items
// GET - http://localhost:3000/itemsIntake/<id>
.get('/:id', (req, res) => {
    const itemId = req.params.id
    const singularItem = recycledItems.find(item => item._id === itemId )
    res.send(singularItem)
})

// This will insert ONE item into the recycledItems array
// POST - http://localhost:3000/itemsIntake/
.post('/', (req, res) => {
    const newItem = req.body
    newItem._id = uuidv4()
    recycledItems.push(newItem)
    res.status(200).end()
})

// This will update ONE item into the recycledItems array based on the ID
// PUT - http://localhost:3000/itemsIntake/<id>
.put('/:id', (req, res) => {
    const itemId = req.params.id
    const itemIndex = recycledItems.findIndex(item => item._id === itemId)
    Object.assign(recycledItems[itemIndex], req.body)
    res.status(200).end()
})

// This will delete ONE item from the recycledItems array based on the ID
// DELETE - http://localhost:3000/itemsIntake/<id>
.delete('/:id', (req, res) => {
    const itemId = req.params.id
    const itemIndex = recycledItems.findIndex(item => item._id === itemId)
    recycledItems.splice(itemIndex, 1)
    res.status(200).end()
})

module.exports = recycledRouter