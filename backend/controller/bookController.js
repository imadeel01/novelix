// Feature: Updated book controller with MongoDB
//Chief Is Here!

//Lets rewriting the bookCntroller.js to use database instead of in-memory array. This will allow us to persist data and handle more complex queries in the future.

const Book = require('../model/bookModel');

// Get all books
exports.getAllBooks = async (req, res) => {
    const books = await Book.find();
    res.status(200).json(books);
};

// Get a book by ID.
exports.getBookById = async (req, res) => {
    const book = await Book.findById(req.params.id)
    if (!book) return res.status(404).json({ error: 'Book not found' })
    res.status(200).json(book);
};

//POST - Upload/Create Book.
exports.createBook = async (req, res) => {
    const { title, author, genre, publishedYear } = req.body;
    if (!title || !author) {
        res.status(400).json({ error: ' Book title and author are required' })
    }
    const book = await Book.create({ title, author, genre, publishedYear });
    res.status(201).json(book);
};

//PUT - Edit/Update Book.

exports.updateBook = async (req, res) => {
    const book = await Book.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!book) return res.status(404).json({ error: 'Book not found' });
    res.status(200).json(book);
};

//DELETE - Delete Book.
exports.deleteBook = async (req, res) => {
    const book = await Book.findByIdAndDelete(req.params.id);
    if (!book) return res.status(404).json({ error: 'Book not found' });
    res.status(204).send();
};


/*
Run me if you want to see the old code, but I suggest you to use the new one with database connection for better performance and scalability.
Old code without database connection, using in-memory array to store books. This is not recommended for production use as data will be lost when the server restarts and it does not support concurrent access or complex queries.
*/
// let books = [];
// // let nextId = 1;
// exports.getAllBooks = (req, res) => {
//     res.status(200).json(books);
// };

// exports.getBookById = (req, res) => {
//     const book = books.find(b => b.id === req.params.id);
//     if (!book) return res.status(404).json({ error: 'Book not found, Try ID upto 10' });
//     res.status(200).json(book);
// };

// exports.createBook = (req, res) => {
//     const { title, author, genre, publishedYear } = req.body;
//     if (!title || !author) {
//         return res.status(400).json({ error: 'Title and author are required' });
//     }
//     const book = { id: String(nextId++), title, author, genre, publishedYear, isAvailable: true };
//     books.push(book);
//     res.status(201).json(book);
// };

// exports.updateBook = (req, res) => {
//     const index = books.findIndex(b => b.id === req.params.id);
//     if (index === -1) return res.status(404).json({ error: 'Book not found' });
//     books[index] = { ...books[index], ...req.body };
//     res.status(200).json(books[index]);
// };

// exports.deleteBook = (req, res) => {
//     const index = books.findIndex(b => b.id === req.params.id);
//     if (index === -1) return res.status(404).json({ error: 'Book not found' });
//     books.splice(index, 1);
//     res.status(204).send();
// };