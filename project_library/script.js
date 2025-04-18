// Library of inputted books
const myLibrary = []
;

// Book Constructor
function Book(title, author, pages, literature) {
    if (!new.target) {
        throw Error("You must use the 'new' keyword!");
    }

    this.title = title,
    this.author = author,
    this.pages = pages,
    this.literature = literature;
    // this.status = status;
    this.id = crypto.randomUUID();
}

// Function to clear the form inputs
function clearInputs() {
    document.querySelector('#title').value = '';
    document.querySelector('#author').value = '';
    document.querySelector('#pages').value = '';
}

// Function to delete book from the table
function deleteBook(element) {
    // if (element.classList.contains('delete')) {
        const confirmDelete = confirm("Are you sure you want to remove this book?");
        if (confirmDelete) {
            
            element.parentElement.parentElement.remove();
            }
        }

// Function to capitilise each word
function changeToUpperCase(string) {
    const firstLetter = string.charAt(0);
    const firstLetterCap = firstLetter.toUpperCase();
    const remainingLetters = string.slice(1);
    const capitilisedWord = firstLetterCap + remainingLetters;
    return capitilisedWord;
}

// Function to show alert message, either success, error, or book removed
function showMessage(message, classIdentifier) {
    alertDiv = document.createElement('div');
    alertDiv.classList.add(`${classIdentifier}-div-alert`);
    alertMessage = document.createElement('p');
    alertMessage.classList.add(`${classIdentifier}-alert`);
    alertMessage.textContent = message;
    alertDiv.appendChild(alertMessage);
    const container = document.querySelector('.document-container');
    const form = document.querySelector('#book-form')
    container.insertBefore(alertDiv, form);
    // The div disappears after an amount of time
    setTimeout(() => document.querySelector(`.${classIdentifier}-alert`).remove(), 2000);
}

// Event: Add inputted books to the book array
function addBookToLibrary(title, author, pages, literature) {
    const book = new Book(title, author, pages, literature);
    book.id = crypto.randomUUID();
    myLibrary.push(book);
}

function deleteRows() {
    let table = document.querySelector("#table");
    for (let i = table.rows.length - 1; i > 0; i--) {
        table.deleteRow(i);
    }
}

// Add iniatial books using the Object Constructor
addBookToLibrary("Harry Potter", "J K Rowling", 300, "Fiction");
addBookToLibrary("The Lord of the Rings", "John RR Tolkien", 1000, "Non-fiction");


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
    literatureData.textContent = `${changeToUpperCase(book.literature)}`;
    literatureData.textContent = `${book.literature}`;
    row.appendChild(literatureData);

    // // Add checkbox button for read status to the table
    // const tableReadData = document.createElement('td');
    // const tableReadStatus = document.createElement('input');
    // const tableReadLabel = document.createElement('label');
    // tableReadStatus.type = 'checkbox';
    // tableReadStatus.classList.add('tableReadStatus');
    // tableReadData.appendChild(tableReadStatus);
    // tableReadData.appendChild(tableReadLabel);
    // const formCheckBox = document.querySelector('#read-status');
    // if (formCheckBox.checked === true) {
    //     tableReadStatus.checked = true;
    //     tableReadLabel.textContent = 'Read';

    // } else {
    //     tableReadStatus.checked = false;
    //     tableReadLabel.textContent = 'Not Read';
    // }

    // Change input checkbox if user has read the book or not 
    // tableReadStatus.addEventListener('click', () => {
    //     if (tableReadStatus.checked === true) {
    //         tableReadLabel.textContent = "Read";
    //     } else {
    //         tableReadLabel.textContent = "Not Read";
    //     }
        
    // })
    // row.appendChild(tableReadData);

    const removeButton = document.createElement('button');
    const removeData = document.createElement('td');
    removeData.appendChild(removeButton);
    removeButton.classList.add('delete');
    removeButton.textContent = `Remove`;
    row.appendChild(removeData);
    removeButton.addEventListener('click', (e) => {
        deleteBook(e.target);
    })

    bookList.appendChild(row);
}

// Event: Display the ititial library in the table
document.addEventListener('DOMContentLoaded', displayBooks);

// Event: Add a book
document.querySelector('#book-form').addEventListener('submit', (e) => {
    // Prevents the event listener from just submitting
    e.preventDefault();

    // get the form data
    const title = document.querySelector('#title').value;
    const author = document.querySelector('#author').value;
    const pages = document.querySelector('#pages').value;
    const literature = changeToUpperCase(document.querySelector('#literature').value);
    // const status = document.querySelector('#read-status').value;

    // Validation to ensure inputs are filled correctly, i.e. no blanks
    if (title === '' || author === '' || pages === '') {
        showMessage('Please fill in all the fields', 'error');
    } else {
        // Resets the table so it is empty
        deleteRows();

        // Resets the input form
        const bookForm = document.querySelector('#book-form');
        bookForm.reset();

        // Add the books to myLibrary
        addBookToLibrary(title, author, pages, literature);

        // Adds the books from myLibrary to the table
        displayBooks();

        // Show a successful message that book was added
        showMessage("Book was added!", 'success');
    }
});

// Event: Remove a book
// document.querySelector('#books-table').addEventListener('click', (e) => {
//     deleteBook(e.target);
// })


/* Old Code

// Library of inputted books
const myLibrary = []
;

// Book Constructor
function Book(title, author, pages, literature, status) {
    if (!new.target) {
        throw Error("You must use the 'new' keyword!");
    }

    this.title = title,
    this.author = author,
    this.pages = pages,
    this.literature = literature;
    this.status = status;
    this.id = crypto.randomUUID();
}

// Function to clear the form inputs
function clearInputs() {
    document.querySelector('#title').value = '';
    document.querySelector('#author').value = '';
    document.querySelector('#pages').value = '';
}

// Function to delete book from the table
function deleteBook(element) {
    // if (element.classList.contains('delete')) {
        const confirmDelete = confirm("Are you sure you want to remove this book?");
        if (confirmDelete) {
            
            element.parentElement.parentElement.remove();
            }
        }

// Function to capitilise each word
function changeToUpperCase(string) {
    const firstLetter = string.charAt(0);
    const firstLetterCap = firstLetter.toUpperCase();
    const remainingLetters = string.slice(1);
    const capitilisedWord = firstLetterCap + remainingLetters;
    return capitilisedWord;
}

// Function to show alert message, either success, error, or book removed
function showMessage(message, classIdentifier) {
    alertDiv = document.createElement('div');
    alertDiv.classList.add(`${classIdentifier}-div-alert`);
    alertMessage = document.createElement('p');
    alertMessage.classList.add(`${classIdentifier}-alert`);
    alertMessage.textContent = message;
    alertDiv.appendChild(alertMessage);
    const container = document.querySelector('.document-container');
    const form = document.querySelector('#book-form')
    container.insertBefore(alertDiv, form);
    // The div disappears after an amount of time
    setTimeout(() => document.querySelector(`.${classIdentifier}-alert`).remove(), 2000);
}

// Event: Add inputted books to the book array
function addBookToLibrary(library, title, author, pages, literature) {
    const book = new Book(title, author, pages, literature);
    book.id = crypto.randomUUID();
    myLibrary.push(book);
}

// Add iniatial books using the Object Constructor
addBookToLibrary(myLibrary, "Harry Potter", "J K Rowling", 300, "Fiction");
addBookToLibrary(myLibrary, "The Lord of the Rings", "John RR Tolkien", 1000, "Fiction");

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
    literatureData.textContent = `${changeToUpperCase(book.literature)}`;
    row.appendChild(literatureData);

    // Add checkbox button for read status to the table
    const tableReadData = document.createElement('td');
    const tableReadStatus = document.createElement('input');
    const tableReadLabel = document.createElement('label');
    tableReadStatus.type = 'checkbox';
    tableReadStatus.classList.add('tableReadStatus');
    tableReadData.appendChild(tableReadStatus);
    tableReadData.appendChild(tableReadLabel);
    const formCheckBox = document.querySelector('#read-status');
    if (formCheckBox.checked === true) {
        tableReadStatus.checked = true;
        tableReadLabel.textContent = 'Read';

    } else {
        tableReadStatus.checked = false;
        tableReadLabel.textContent = 'Not Read';
    }

    // Change input checkbox if user has read the book or not 
    tableReadStatus.addEventListener('click', () => {
        if (tableReadStatus.checked === true) {
            tableReadLabel.textContent = "Read";
        } else {
            tableReadLabel.textContent = "Not Read";
        }
        
    })
    row.appendChild(tableReadData);

    const removeButton = document.createElement('button');
    const removeData = document.createElement('td');
    removeData.appendChild(removeButton);
    removeButton.classList.add('delete');
    removeButton.textContent = `Remove`;
    row.appendChild(removeData);
    removeButton.addEventListener('click', (e) => {
        deleteBook(e.target);
    })

    bookList.appendChild(row);
}

// Event: Display the ititial library in the table
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
        // alert('Please fill in all the fields');
        showMessage('Please fill in all the fields', 'error');
    } else {
        // Instantiate a book using object constructor
        // const book = new Book(title, author, pages, literature)

        addBookToLibrary(title, author, pages, literature);

        // Show a successful message that book was added
        showMessage("Book was added!", 'success');

        // Add a Book to the Table
        const book = new Book(title, author, pages, literature);
        addBookToTable(book);

        // Clear the inputs in the form
        clearInputs();
    }
});

// Event: Remove a book
// document.querySelector('#books-table').addEventListener('click', (e) => {
//     deleteBook(e.target);
// })
*/