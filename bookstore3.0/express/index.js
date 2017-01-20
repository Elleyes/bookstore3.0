var express = require ('express');
var db = require ('./queries')
var app2 = express()
var getAllBooks = require('./queries')
var getOneBook = require('./queries')
// console.log(getAllBooks);
app2.get('/books', db.getAllBooks);

app2.get('/books', db.getOneBook);




app2.listen(3001)

module.exports= app2;
