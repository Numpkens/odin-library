# Library Project

## Overview
This project is a simple library application that allows users to add, remove, and manage books. Books are stored in an array and displayed dynamically on the page. Each book has a unique identifier generated using `crypto.randomUUID()` to ensure stable identification.

## Features
- **Add a new book**: Users can input book details through a form (title, author, number of pages, and read status).
- **Display books**: Books are displayed in a structured format (e.g., table or card layout).
- **Remove books**: Each book has a button to remove it from the library.
- **Toggle read status**: Users can update whether a book has been read.
- **Unique book IDs**: Ensures each book can be uniquely referenced even if books are removed or reordered.

## Technologies Used
- HTML
- CSS
- JavaScript

## Installation
1. Clone the repository:
   ```sh
   git clone https://github.com/yourusername/library-project.git
   ```
2. Navigate to the project folder:
   ```sh
   cd library-project
   ```
3. Open `index.html` in a browser.

## Usage
1. Click the "New Book" button to open the book input form.
2. Fill in the required details and submit the form. The book will be added to the library.
3. Books are displayed dynamically on the page.
4. Each book card/table entry includes:
   - A "Remove" button to delete the book from the library.
   - A "Toggle Read Status" button to mark the book as read/unread.
5. The library updates dynamically as books are added, removed, or updated.

## Code Structure
- `index.html`: Contains the HTML structure for the page.
- `style.css`: Contains styles for the library interface.
- `script.js`: Handles book creation, storage, display, and user interactions.

## JavaScript Implementation
- **Book Constructor**: Creates book objects with title, author, pages, and read status.
- **addBookToLibrary()**: Creates a book and stores it in `myLibrary`.
- **displayBooks()**: Loops through `myLibrary` and dynamically updates the page.
- **removeBook()**: Deletes a book using its unique ID.
- **toggleReadStatus()**: Updates the read status of a book.

## Known Issues & Fixes
- **Form submission refreshes the page**:
  - Solution: Use `event.preventDefault();` to prevent default form behavior.
- **Books not updating properly**:
  - Solution: Ensure `displayBooks()` is called after any changes to `myLibrary`.

## Future Improvements
- Implement localStorage to persist books across sessions.
- Add book categories or genres.
- Enhance UI with animations and better styling.

## License
This project is open-source under the [MIT License](LICENSE).

