const requstURL = 'http://localhost:3030/jsonstore/collections/books';
const loadAllBooks = document.getElementById('loadBooks');
loadAllBooks.addEventListener('click', fetchBooks);
const tableData = document.querySelector('tbody');
const createBookForm = document.querySelector('form');
const formButton = document.querySelector('form button');


createBookForm.addEventListener('submit', createBook);


async function fetchBooks() {
    tableData.innerHTML = '';
    const response = await fetch(requstURL);
    const data = await response.json();
    console.log(data);

    Object.entries(data).forEach(([id, bookInfo]) => {

        console.log(bookInfo);


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

        tableRow.append(bookNameCell, authorNameCell, buttonsCell);
        tableData.appendChild(tableRow);

        editBnt.addEventListener('click', () => obtainBookDetails(id));

        deleteBnt.addEventListener('click', () => deleteBook(id));


    })


}

function obtainBookDetails(id) {
    const formHeading = document.querySelector('form h3');
    formHeading.textContent = 'Edit FORM';


    formButton.textContent = 'Save';

    const bookTitle = document.querySelector('input[name="title"]');
    const bookAuthor = document.querySelector('input[name="author"]');

    fetch(`${requstURL}/${id}`)
        .then((response) => response.json())
        .then((data) => {
            console.log(data);

            bookTitle.value = data.title;
            bookAuthor.value = data.author;

            const newFormButton = formButton.cloneNode(true);
            formButton.parentNode.replaceChild(newFormButton, formButton);


            newFormButton.addEventListener('click', (e) => {
                e.preventDefault();
                editBook(id);
            });
        });
}

async function editBook(id) {
    const bookTitle = document.querySelector('input[name="title"]');
    const bookAuthor = document.querySelector('input[name="author"]');
    const updateBook = await fetch((`${requstURL}/${id}`), {
        method: 'PUT',
        headers: { 'Content-type': 'application/json' },
        body: JSON.stringify({
            author: bookAuthor.value,
            title: bookTitle.value
        })
    })
    fetchBooks();
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
        alert('Empty fields')
        throw new Error("Empty fields");

    }
    createBookForm.querySelector('[name="title"]').value = '';
    createBookForm.querySelector('[name="author"]').value = '';

}