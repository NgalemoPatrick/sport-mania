// initial import 
const express = require('express')
const app = express()
const path = require("path")
const PORT = process.env.PORT || 5100



// define the static files route
app.use('/', express.static(path.join(__dirname, '/public')))

// define the root route of the app
app.use('/', require('./routes/root'))



// Start the app
app.listen(PORT, () => console.log(`Server runniing on port ${PORT}`))