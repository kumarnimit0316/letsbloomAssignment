const express = require("express");
const router = express.Router();
const Book = require("../schema/bookSchema");
const { body, validationResult } = require("express-validator");

//fetch all books from the database
router.get("/GET/api/books", async (req, res) => {
    try {
        const books = await Book.find();
        // finding all books in database and sending response
        res.json(books);
    } catch (error) {
        console.log(error.message);
        res.status(500).send("Internal server error");
    }
});

//add new book
router.post("/POST/api/books", [
    body("title", "Title must not be empty").trim().notEmpty(),
    body("author", "Author must not be empty").trim().notEmpty(),
    body("edition", "Author must not be empty").trim().notEmpty(),
    body("isbn", "ISBN must not be empty").trim().notEmpty(),
], async (req, res) => {
    const { title, author, isbn, edition } = req.body;
    const errors = validationResult(req);
    // checking errors in req.body
    if (!errors.isEmpty()) {
        return res.status(400).json(errors);
    }
    try {
        const searchedBook = await Book.findOne({ isbn });
        // checking if book already exists by using ISBN number(unique for each book)
        if (searchedBook) return res.status(400).send("Book already exists");
        const book = new Book({
            title,
            author,
            isbn,
            edition
        });
        // saving book to database
        const addedBook = await book.save();
        res.json(addedBook);
    } catch (error) {
        res.status(500).send("internal server error");
    }
});

// update book
router.put("/PUT/api/books/:id", async (req, res) => {
    const { available } = req.body;
    const errors = validationResult(req);
    // checking errors in req.body
    if (!errors.isEmpty()) {
        return res.status(400).json(errors);
    }
    try {
        const searchedBook = await Book.findById(req.params.id);
        // checking if book exists or not
        if (searchedBook) {
            // updating book
            const updatedBook = await Book.findByIdAndUpdate(req.params.id, { "$set": { "available": available } }, { new: true });
            res.json(updatedBook);
        }
    } catch (error) {
        res.status(400).send("Cannot find Book");
    }
});

module.exports = router;