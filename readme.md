To install dependencies run the following command in terminal in the project directory:

### `npm i`

Project directory contains the following:

1. routes: This folder contains file which has routes for various tasks such as add book, get all books and update book details.
2. schema: This folder contains file which has schema defined for books.
3. db.js: This file has the function for connecting to database.
4. index.js: This file is entry point for the application.
5. seedDB.js: This file contains the function which will sedd the database with dummy values.

User need to create .env file in project directory and specify two variables DATABASE which conatins the url of mongoDB database for connection and PORT whcih contains port number

To start server user need to enter following command in terminal in the project directory:

### `npm start`

It will run the server on desired port.

### BOOK Schema

1. title: This field contains name of book.
2. author: This field contains name of author.
3. isbn: This is a number which is unique for each book.
4. available: This is a boolean value which specify that weather the book is available for borrowing from library. By default it is true.
5. edition: This field defines the edition of book.

### Connection to database and Seeding

The connectToDB function is imported and executed in index.js which establishes connection with database. The function seedDB is imported and executed to seed the database with dummy values. If the database already contains some books then this function don't do anything. If anyone want to remove seedDB function they need to comment Line 13 and 14 in index.js.

### API Endpoints

1. Endpoint 1: Retrieve All Books

   Endpoint: GET/api/books
   response: json.
   It will provide information of all the books in library.

2. Endpoint 2: Add a New Book

   Endpoint: POST/api/books
   request: json.
   response: json.
   It will validate the input provided and then add the book to database if book does not exists in library.

3. Endpoint 2: Update Book Details

   Endpoint: PUT/api/books/{id}
   request: json.
   response: json.
   It will update the available field in the bookSchema and assuming other field are not required to be changed.
