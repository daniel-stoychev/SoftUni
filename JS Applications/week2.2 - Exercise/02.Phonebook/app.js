const baseURL = 'http://localhost:3030/jsonstore/phonebook';
const loadBtn = document.getElementById('btnLoad');
const createBtn = document.getElementById('btnCreate');

loadBtn.addEventListener('click', loadContacts);
createBtn.addEventListener('click', createContacts);

function loadContacts() {
    const phoneAreaEl = document.getElementById('phonebook');
    phoneAreaEl.innerHTML = '';
    fetch(baseURL)
        .then((res) => res.json())
        .then((data) => {
            console.log(data);

            const objValues = Object.values(data);
            objValues.forEach((value) => {
                // console.log(value);

                const contact = document.createElement('li');
                contact.textContent = `${value.person} ${value.phone}`


                const deleteBtn = document.createElement('button');
                deleteBtn.textContent = 'Delete';
                deleteBtn.addEventListener('click', () => deleteContact(value._id));
                contact.appendChild(deleteBtn);
                phoneAreaEl.appendChild(contact);

            });

        })
        .catch((err) => alert(err.message))
}

function createContacts() {
    const personEl = document.querySelector('#person');
    const phoneEl = document.querySelector('#phone');

    let personElValue = personEl.value;
    let phoneElValue = phoneEl.value;

    fetch(baseURL, {
        method: 'POST',
        body: JSON.stringify({
            person: personElValue,
            phone: phoneElValue
        }),
        headers: {
            'Content-type': 'application/json',
        },
    })
        .then(res => res.json())
        .then(() => {
            personEl.value = '';
            phoneEl.value = '';
            loadContacts();

        })
        .catch((err) => alert(err.message));


}

function deleteContact(id) {
    console.log('TEST');

    fetch(`${baseURL}/${id}`, {
        method: 'DELETE'
    })
        .then(() => {
            loadContacts();

        })
        .catch(err => alert(err.message))

}

