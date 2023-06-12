const express = require('express')
const app = express()
const PORT= 3600
const books = require('./routes/commercialRoute')

app.get(('/'), (request, response)=> {
    response.send('Home Page of the Bookstore')
})

app.use('/books', books)
app.listen(PORT, console.log(`The server is running is http://localhost:${PORT}`))