const pgPromises = require('pg-promise');
const pgp = pgPromise();
const db = pgp('postgres://${process.env.User}@localhost:5432') // ask for help

console.log('we are here')

//get all books form database
function getAllBooks (request, response, next) {
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
}

module.exports = {
  getAllBooks: getAllBooks
};
