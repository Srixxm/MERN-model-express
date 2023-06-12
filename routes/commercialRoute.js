const express = require('express')
const router = express.Router()

let products = [
    {
        "id": 1,
        "BookName" : "21st century boys Chapter-225",
        "price" : "6000" 
    },
    {
        "id": 2,
        "BookName" : "Vinland saga volume-20",
        "price" : "3500" 
    },
    {
        "id": 3,
        "BookName" : "Monster(2004)",
        "price" : "4800" 
    },
    {
        "id": 4,
        "BookName" : "Avatar: The last airbender",
        "price" : "6200" 
    },
    {
        "id": 5,
        "BookName" : "To all of you that loved all of me",
        "price" : "5000" 
    },
]

router.get(('/'), (request, response)=>{
    response.send(`Welcome to the Book section explore your fantasy books`)
})

router.get(('/:id'), (request, response)=>{
    response.send(`BOOK NAME : ${request.product.BookName} PRICE: ${request.product.price}`)
})


router.param("id", (request, response, next, id)=> {
    request.product = products[id]
    console.log(`Book name : ${request.product.BookName}`);
    console.log(`price : ${request.product.price}`)
    next()
})


module.exports= router