const pgPromise = require('pg-promise');
const pgp = pgPromise();
const db = pgp('postgres://jhallman5@localhost:5432/library') // ask for help

// console.log(db)

//get all books form database
function getAllBooks ( request, response, next)  {
  var selectAllBooks = `SELECT * FROM librarys `

  db.manyOrNone(selectAllBooks)
    .then(function(librarys) {
      console.log("SELECT ALL!")
      response.json({librarys});
    })
    .catch(function(err) { next(err); });

  }

// get one book
  function getOneBook ( request, response , next) {
    let title =  (request.body.title)
    let selectOneBook = (`SELECT * FROM librarys WHERE title = $1 `, title)

     return db.oneOrNone(selectOneBook,[title])
      .then(function(){
        response.redirect('/books');
      })
      .catch(function(err) {next(err); })
    }


module.exports = {
  getAllBooks: getAllBooks,
   getOneBook
};
