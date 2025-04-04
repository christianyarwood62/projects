const myLibrary = [
    {title:'harry potter',
    author: 'Test',
    pages: '300',
    read: 'yes',
    }
    {title: 'lord of the rings',
    author: 'christian',
    pages: '300',
    read: 'no',
    }
];

function Book(title, author, pages, read, id) {
    this.title = title,
    this.author = author,
    this.pages = pages,
    this.read = read,
    this.id = id;
}

function addBookToLibrary(title, author, pages, read) {
    const book = new Book(title, author, pages, read, id);
    myLibrary.push(book);
}