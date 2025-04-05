// Library of inputted books
const myLibrary = [
    {
        title:'harry potter',
        author: 'J K Rowling',
        pages: '300',
        literature: 'Fiction',
        id: crypto.randomUUID(),
    },
    {
        title: 'lord of the rings',
        author: 'christian',
        pages: '1000',
        literature: 'Non-Fiction',
        id: crypto.randomUUID(),
    }
];

// Book Constructor
function Book(title, author, pages, literature) {
    this.title = title,
    this.author = author,
    this.pages = pages,
    this.literature = literature;
}

// Event: Add inputted books to the book array
function addBookToLibrary(title, author, pages, read) {
    const book = new Book(title, author, pages, read, id);
    myLibrary.push(book);
    return book;
}

const books = myLibrary;
books.forEach((book) => addBookToLibrary(book))

// Event: