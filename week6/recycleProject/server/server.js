const express = require('express')
// Create the express app
const app = express()
// Declare the port
const PORT = 9000

// Pull in the router exported from teamsRouter.js
const recycledRouter = require('./Routes/itemsIntake.js')



// Functions for middleware
var logging = (req, res, next) => {
    console.log("I am logging something")
    next()
}

// Middleware : parse the body of the request
app.use(express.json())
// Middleware : called function declared above
app.use(logging)

// Routes
app.use('/itemsIntake', recycledRouter)

// Server listener
app.listen(PORT, () => {
    console.log(`App Started on: ${PORT}`)
})