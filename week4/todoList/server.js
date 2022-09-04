const express = require('express')
const app = express()
const PORT = 3000

// Mapping to endpoint routers
const todoRouter = require ('./components/todoList')

// Defines my middleware functionality
var logging = (req, res, next) => {
    console.log("I am logging something")
    next()
}

// This uses middleware functionality
app.use(logging)
app.use(express.json())
app.use('/todoList', todoRouter)

// Default endpoint
app.get('/', (req, res) => {
    res.send("No endpoint found")
})

// This is the listener
app.listen(PORT, () => {
    console.log(`App started on ${PORT}`)
})