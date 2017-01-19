var express = require ('express');
var db = require ('./queries') // file structure may change

var app = express()

console.log('db', db)
// get all books
app.get('/books', function getAllBooks (request, response, next) {
  console.log('at the beginning of getAllbook')
  let selectAllBooks = 'SELECT * FROM library ORDER BY title'

  db.any(selectAllBooks)
  .then( function(data) {
    console.log('data', data)
    // res.status(200)
    //   .JSON({
    //       status:'SUCCESS',
    //         data: data,
    //         message: "selectAllBooks"
    //   });
    })
    // .then(function(books){
    //   console.log("WORKS!")
    //   response.render('index', {books} );  //index may change
    // })
    .catch(function(err) { next(err); });
});

// get single book
app.get('/api/books/:id', db.getSingleBook);

app.listen(3000, function() {
  console.log('the server is running!')
})

module.exports= router;
