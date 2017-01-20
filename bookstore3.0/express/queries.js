const pgPromise = require('pg-promise');
const pgp = pgPromise();
const db = pgp('postgres://jhallman5@localhost:5432/library') // ask for help

// console.log(db)

//get all books form database
function getAllBooks ( request, response, next)  {
  var selectAllBooks = `SELECT * FROM librarys `

  db.any(selectAllBooks)
    .then(function(books) {
      console.log("SELECT ALL!")
      response.json({books} );
    })
    .catch(function(err) { next(err); });

  }


module.exports = {
  getAllBooks: getAllBooks
};
