// Library of inputted books
const myLibrary = [
    {
        title: 'harry potter',
        author: 'J K Rowling',
        pages: '300',
        literature: 'Fiction',
        // id: crypto.randomUUID(),
    },
    {
        title: 'lord of the rings',
        author: 'christian',
        pages: '1000',
        literature: 'Non-Fiction',
        // id: crypto.randomUUID(),
    }
];

// Book Constructor
function Book(title, author, pages, literature) {
    if (!new.target) {
        throw Error("You must use the 'new' keyword!");
    }

    this.title = title,
    this.author = author,
    this.pages = pages,
    this.literature = literature;
}

// Function to clear the form inputs
function clearInputs() {
    document.querySelector('#title').value = '';
    document.querySelector('#author').value = '';
    document.querySelector('#pages').value = '';
}

// Function to delete book from the table
function deleteBook(element) {
    const confirmDelete = confirm("Are you sure you want to remove this book?");
    if (confirmDelete) {
        if (element.classList.contains('delete')) {
            element.parentElement.remove();
        }
    }
}

// Event: Add inputted books to the book array
function addBookToLibrary(title, author, pages, literature) {
    const book = new Book(title, author, pages, literature);
    myLibrary.push(book);
    return book;
}

// Display the books on the table
function displayBooks() {
    const books = myLibrary;
    books.forEach((book) => addBookToTable(book));
}

// Event: Make a row of data for the newly inputted book
function addBookToTable(book) {
    const bookList = document.querySelector('#books-table');
    const row = document.createElement('tr');
    row.classList.add('table-row');

    const titleData = document.createElement('td');
    titleData.textContent = `${book.title}`;
    row.appendChild(titleData);

    const authorData = document.createElement('td');
    authorData.textContent = `${book.author}`;
    row.appendChild(authorData);

    const pagesData = document.createElement('td');
    pagesData.textContent = `${book.pages}`;
    row.appendChild(pagesData);

    const literatureData = document.createElement('td');
    literatureData.textContent = `${book.literature}`;
    row.appendChild(literatureData);

    const removeButton = document.createElement('td');
    removeButton.classList.add('delete');
    removeButton.textContent = `Remove`;
    row.appendChild(removeButton);

    bookList.appendChild(row);
}

// Event: Display the row in the table
document.addEventListener('DOMContentLoaded', displayBooks);

// Event: Add a book
document.querySelector('#book-form').addEventListener('submit', (e) => {
    // Prevents the event listener from just submitting
    e.preventDefault();

    // get the form data
    const title = document.querySelector('#title').value;
    const author = document.querySelector('#author').value;
    const pages = document.querySelector('#pages').value;
    const literature = document.querySelector('#literature').value;

    // Validation to ensure inputs are filled correctly, i.e. no blanks
    if (title === '' || author === '' || pages === '') {
        alert('Please fill in all the fields');
    } else {
        // Instantiate a book using object constructor
        const book = new Book(title, author, pages, literature)

        // Add a Book to the Table
        addBookToTable(book);

        // Clear the inputs in the form
        clearInputs();
    }
});

// Event: Remove a book
document.querySelector('#books-table').addEventListener('click', (e) => {
    deleteBook(e.target);
})