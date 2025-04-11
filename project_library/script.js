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
function addBookToLibrary(title, author, pages, literature, status) {
    const book = new Book(title, author, pages, literature, status);
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
addBookToLibrary("Harry Potter", "J K Rowling", 300, "Fiction", true);
addBookToLibrary("The Lord of the Rings", "John RR Tolkien", 1000, "Non-fiction", false);


// Display the books on the table
function displayBooks() {
    const books = myLibrary;
    books.forEach((book) => addBookToTable(book));
}

// function: Make a row of data for the newly inputted book
function addBookToTable(book) {
    const bookList = document.querySelector('#books-table');
    const row = document.createElement('tr');
    row.classList.add('table-row');

    // Creates table data objects for each book property and adds them to the newly created row
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

    // Add button to toggle read status on the table, changing the color too
    const tableReadData = document.createElement('td');
    const tableReadCheckBox = document.createElement('input');
    tableReadCheckBox.type = 'checkbox'
    tableReadCheckBox.classList.add('table-read-status');
    tableReadData.appendChild(tableReadCheckBox);
    const readCheckBoxLabel = document.createElement('label');
    tableReadData.appendChild(readCheckBoxLabel);
    if (book.status === true) {
        tableReadCheckBox.checked = true;
        readCheckBoxLabel.textContent = 'Read';
        row.style.backgroundColor = 'lightgreen';
    } else {
        tableReadCheckBox.checked = false;
        readCheckBoxLabel.textContent = 'Not read';
        row.style.backgroundColor = 'lightcoral';
    }
    row.appendChild(tableReadData);

    // Event: Change the read status on the table using the button
    tableReadCheckBox.addEventListener('click', () => {
        changeReadStatus(book);
    })

    // Make a remove button and add it to the books in the table
    const removeButton = document.createElement('button');
    const removeData = document.createElement('td');
    removeData.appendChild(removeButton);
    removeButton.classList.add('delete');
    removeButton.textContent = `Remove`;
    row.appendChild(removeData);
    removeButton.addEventListener('click', () => {
        deleteBook(book);
        deleteRows();
        displayBooks();
    })

    // Add the row to the table of books
    bookList.appendChild(row);
}

// Function: changes read status of books in the table
function changeReadStatus(book) {
    const id = myLibrary.findIndex(item => item.id === book.id);
        if (id !== -1) {
            if (book.status === true) {
                book.status = false;
            } else {
                book.status = true;
            }
        }
    deleteRows();
    displayBooks();
}

// Function: deletes the book from myLibrary
function deleteBook(book) {
    const confirmDelete = confirm("Are you sure you want to remove this book?");
            if (confirmDelete) {
                const id = myLibrary.findIndex(item => item.id === book.id);
                if (id !== -1) {
                    myLibrary.splice(id, 1);
        }
        }
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
    const status = document.querySelector('#read-status').checked;

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
        addBookToLibrary(title, author, pages, literature, status);

        // Adds the books from myLibrary to the table
        displayBooks();

        // Show a successful message that book was added
        showMessage("Book was added!", 'success');
    }
});

/* Set the width of the sidebar to 250px and the left margin of the page content to 250px */
function openNav() {
    document.querySelector("#mySidebar").style.width = "250px";
    document.querySelector("#main").style.marginLeft = "250px";
  }

/* Set the width of the sidebar to 0 and the left margin of the page content to 0 */
function closeNav() {
    document.querySelector("#mySidebar").style.width = "0";
    document.querySelector("#main").style.marginLeft = "0";
}