import Books from '../models/bookModel.js';

//Get all books
export const getBooks = (req, res)=>{
    res.json(Books);
}

//Get book by ID
export const getBookById = (req, res)=>{
    const book = Books.find((b) => b.id === parseInt(req.params.id));
    if(!book) return res.status(404),json({ message: 'Book not found'});

    res.json(book);
}

//Create a new book
export const createBook = (req, res)=>{
    const {title, author} = req.body;
    if(!title || !author) return res.status(400).json({ message: 'Title and Author are required'});

    const newBook = {
        id: Books.length ? Books[Books.length -1].id + 1: 1,
        title,
        author,
    };

    Books.push(newBook);
    res.status(201).json(newBook);
}

//Update a book
export const updateBook = (req, res)=>{
    const book = Books.find((b)=> b.id === parseInt(req.params.id));
    if(!book) return res.status(404).json({message: 'Book not found'});

    const {title, author}= req.body;
    if(title) book.title = title;
    if(author) book.author = author;

    res.json(book);
}

//Delete a book
export const deleteBook = (req, res)=>{
    const bookIndex = Books.findIndex((b)=> b.id ===  parseInt(req.params.id));
    if(bookIndex === -1) return res.status(404).json({message: 'Book not found'});

    const deleteBook = Books.splice(bookIndex, 1);
    res.json({message: 'Book deleted', book: deleteBook[0]});
}