// Array to store books
const myLibrary = [];

// Book Constructor
function Book(title, author, pages, readStatus) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.readStatus = readStatus;
    this.id = crypto.randomUUID(); // Unique ID for each book
}

// Function to add a book to the library
function addBookToLibrary(title, author, pages, readStatus) {
    const newBook = new Book(title, author, pages, readStatus);
    myLibrary.push(newBook);
    displayBooks(); // Update UI
}

// Function to display books in a table
function displayBooks() {
    const tableBody = document.getElementById("library-body");
    tableBody.innerHTML = ""; // Clear previous display

    myLibrary.forEach((book) => {
        const row = document.createElement("tr");

        row.innerHTML = `
        <td>${book.title}</td>
        <td>${book.author}</td>
        <td>${book.pages}</td>
        <td>${book.readStatus ? "Yes" : "No"}</td>
        <td>
        <button class="toggle-read" data-id="${book.id}">Toggle Read</button>
        <button class="remove-book" data-id="${book.id}">Remove</button>
        </td>
        `;

        tableBody.appendChild(row);
    });

    // Attach event listeners for Remove and Toggle Read buttons
    document.querySelectorAll(".remove-book").forEach((btn) =>
    btn.addEventListener("click", (e) => removeBook(e.target.dataset.id))
    );

    document.querySelectorAll(".toggle-read").forEach((btn) =>
    btn.addEventListener("click", (e) => toggleReadStatus(e.target.dataset.id))
    );
}

// Function to remove a book from the library
function removeBook(id) {
    myLibrary.splice(myLibrary.findIndex((book) => book.id === id), 1);
    displayBooks(); // Update UI
}

// Function to toggle read status
function toggleReadStatus(id) {
    const book = myLibrary.find((book) => book.id === id);
    if (book) {
        book.readStatus = !book.readStatus; // Toggle true/false
    }
    displayBooks(); // Update UI
}

// Function to handle form submission
function handleNewBookForm(event) {
    event.preventDefault(); // Prevent form from refreshing the page

    // Get input values
    const title = document.getElementById("title").value;
    const author = document.getElementById("author").value;
    const pages = document.getElementById("pages").value;
    const readStatus = document.getElementById("read").checked;

    // Add book to library
    addBookToLibrary(title, author, pages, readStatus);

    // Clear form
    document.getElementById("book-form").reset();
}

// Initialize event listeners
document.getElementById("book-form").addEventListener("submit", handleNewBookForm);

// Add some initial books manually for testing
addBookToLibrary("The Hobbit", "J.R.R. Tolkien", 310, true);
addBookToLibrary("1984", "George Orwell", 328, false);
addBookToLibrary("To Kill a Mockingbird", "Harper Lee", 281, true);
displayBooks();
