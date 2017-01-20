DROP TABLE IF EXISTS librarys;

CREATE TABLE librarys (
  id SERIAL PRIMARY KEY,
  image TEXT,
  author VARCHAR(50),
  title TEXT,
  published INTEGER,
  genre VARCHAR(50),
  description TEXT
);
