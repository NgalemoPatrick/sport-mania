// initial import 
const express = require('express')
const app = express()
const path = require("path")
const PORT = process.env.PORT || 5100



// define the static files route
app.use('/', express.static(path.join(__dirname, '/public')))

// define the root route of the app
app.use('/', require('./routes/root'))


// error page 
app.use('*', (req, res) => {
    res.status(404)
    if(req.accepts('html')){
        res.sendFile(path.join(__dirname, 'views', '404.html'))
    }else if (req.accepts('json')) {
        res.json({message: '404 Not Found'})
    }else {
        res.type('txt').send('404 Not Found')
    }
})
// Start the app
app.listen(PORT, () => console.log(`Server runniing on port ${PORT}`))