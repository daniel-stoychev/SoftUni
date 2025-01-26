const requstURL = 'http://localhost:3030/jsonstore/collections/books';
const loadAllBooks = document.getElementById('loadBooks');
loadAllBooks.addEventListener('click', fetchBooks);
const tableData = document.querySelector('tbody');

const createBookForm = document.querySelector('form');
createBookForm.addEventListener('submit', createBook);

async function fetchBooks() {
    tableData.innerHTML = '';
    const response = await fetch(requstURL);
    const data = await response.json();
    console.log(data);

    Object.entries(data).forEach(([id, bookInfo]) => {

        const tableRow = document.createElement('tr');
        const authorNameCell = document.createElement('td');
        authorNameCell.textContent = bookInfo.author;
        const bookNameCell = document.createElement('td');
        bookNameCell.textContent = bookInfo.title;
        const buttonsCell = document.createElement('td');

        const editBnt = document.createElement('button');
        editBnt.textContent = 'Edit';
        const deleteBnt = document.createElement('button');
        deleteBnt.textContent = 'Delete';
        buttonsCell.append(editBnt, deleteBnt);

        tableRow.append(authorNameCell, bookNameCell, buttonsCell);
        tableData.appendChild(tableRow);

        // editBnt.addEventListener('click', () => editBook(id));

        deleteBnt.addEventListener('click', () => deleteBook(id));


    })


}

function deleteBook(id) {
    fetch(`${requstURL}/${id}`, {
        method: 'DELETE'
    })
        .then(() => {
            fetchBooks();
        })
        .catch((err) => err.message)

}

async function createBook(e) {
    e.preventDefault();

    const formData = new FormData(createBookForm);
    const bookTitle = formData.get('title');
    const bookAuthor = formData.get('author');

    if (bookTitle && bookAuthor) {

        const newBookData = await fetch(requstURL, {
            method: 'POST',
            headers: { 'Content-type': 'application/json' },
            body: JSON.stringify({
                author: bookAuthor,
                title: bookTitle
            })
        })
        fetchBooks();


    } else {
        throw new Error("Empty fields");

    }
    createBookForm.querySelector('[name="title"]').value = '';
    createBookForm.querySelector('[name="author"]').value = '';

}