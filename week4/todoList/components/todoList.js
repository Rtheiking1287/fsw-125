const express = require('express')
const todoRouter = express.Router()

const {v4:uuidv4 } = require('uuid')

let todos = [
    {"name":"Go to the Gym","description":"Do legs exercise routine","imageURL":"https://upload.wikimedia.org/wikipedia/en/thumb/3/3b/SpongeBob_SquarePants_character.svg/640px-SpongeBob_SquarePants_character.svg.png","quantity":"5","pricePerUnit":"3","recyclable":"true","_id":uuidv4()},
    {"name":"Clean living room","description":"pick up trash, vacuum, and put everything away","imageURL":"https://nick-intl.mtvnimages.com/uri/mgid:file:gsp:kids-assets:/nick/properties/spongebob-squarepants/characters/mrkrabs-about-web-desktop.jpg?quality=0.75&height=460&width=460&matte=true&crop=true","quantity":"200","pricePerUnit":"24","recyclable":"true","_id":uuidv4()},
    {"name":"Get training gear together","description":"Grab packs, uniforms, and supplies","imageURL":"https://nick-intl.mtvnimages.com/uri/mgid:file:gsp:kids-assets:/nick/properties/spongebob-squarepants/characters/plankton-character-web-desktop.png?height=0&width=480&matte=true&crop=false","quantity":"4","pricePerUnit":"10","recyclable":"true","_id":uuidv4()},
    {"name":"Build training plan","description":"Look at all requirements and choose what we haven't already done","imageURL":"https://miro.medium.com/max/1400/1*XLkyIpaeYOL52sS2QF7DLA.png","quantity":"36","pricePerUnit":"2","recyclable":"true","_id":uuidv4()}
]

todoRouter

// This will return ALL items
// GET - http://localhost:3000/todoList
.get('/', (req, res) => {
    res.send(todos)
})

// This will return item by ID
// GET - http://localhost:3000/todoList/<id>
.get('/:id', (req, res) => {
    const itemId = req.params.id
    const singularItem = todos.find(item => item._id === itemId )
    res.send(singularItem)
})

// This will insert ONE item into the todos array
// POST - http://localhost:3000/todoList/
.post('/', (req, res) => {
    const newItem = req.body
    newItem._id = uuidv4()
    todos.push(newItem)
    res.status(200).end()
})

// This will update ONE item into the todos array based on the ID
// PUT - http://localhost:3000/todoList/<id>
.put('/:id', (req, res) => {
    const itemId = req.params.id
    const itemIndex = todos.findIndex(item => item._id === itemId)
    Object.assign(todos[itemIndex], req.body)
    res.status(200).end()
})

// This will delete ONE item from the todos array based on the ID
// DELETE - http://localhost:3000/todoList/<id>
.delete('/:id', (req, res) => {
    const itemId = req.params.id
    const itemIndex = todos.findIndex(item => item._id === itemId)
    todos.splice(itemIndex, 1)
    res.status(200).end()
})

module.exports = todoRouter