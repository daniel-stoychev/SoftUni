const baseURL = 'http://localhost:3030/users';
const catchesUrl = 'http://localhost:3030/data/catches';

const storageItem = localStorage.getItem('email');
const guestView = document.querySelector('#guest');
const userView = document.querySelector('#user');
const loggedInNameEl = document.querySelector('.email span');
const logoutEl = document.querySelector('#logout');
const accessToken = localStorage.getItem('accessToken');


if (storageItem) {
    userView.style.display = 'inline-block';
    guestView.style.display = 'none';
    loggedInNameEl.textContent = localStorage.getItem('email');
    const addBtn = document.querySelector('.add');
    addBtn.disabled = false;
} else {
    userView.style.display = 'none';
    guestView.style.display = 'inline-block';
}

logoutEl.addEventListener('click', logout)

function logout() {

    fetch(`${baseURL}/logout`, {
        method: 'GET',
        headers: {
            'X-Authorization': accessToken
        }
    })
        .then(() => {
            localStorage.removeItem('accessToken');
            localStorage.removeItem('email');
            location.href = 'index.html';
        })


}

//CATCH MANIPULATION

const catches = document.querySelector('#catches');
catches.innerHTML = '';
const loadCatchesBtnEl = document.querySelector('.load');
loadCatchesBtnEl.addEventListener('click', loadCatches);

const addCatch = document.querySelector('#addForm');
addCatch.addEventListener('submit', createCatch);

function loadCatches() {
    fetch(catchesUrl)
        .then(res => res.json())
        .then(data => {
            // console.log(data);
            data.forEach((result) => {
                console.log(result);
                // catches.innerHTML = '';

                const catchDiv = document.createElement('div');
                catchDiv.classList.add('catch');

                const labels = ['Angler', 'Weight', 'Species', 'Location', 'Bait', 'Capture Time'];
                const values = [result.angler, result.weight, result.species, result.location, result.bait, result.captureTime];
                const classes = ['angler', 'weight', 'species', 'location', 'bait', 'captureTime'];
                const inputTypes = ['text', 'text', 'text', 'text', 'text', 'number'];

                labels.forEach((label, index) => {
                    const labelEl = document.createElement('label');
                    labelEl.textContent = label;

                    const inputEl = document.createElement('input');
                    inputEl.type = inputTypes[index];
                    inputEl.classList.add(classes[index]);
                    inputEl.value = values[index];

                    catchDiv.appendChild(labelEl);
                    catchDiv.appendChild(inputEl);
                });

                const userId = localStorage.getItem('id');

                const updateButton = document.createElement('button');
                updateButton.classList.add('update');
                // updateButton.dataset.id = '07f260f4-466c-4607-9a33-f7273b24f1b4';
                updateButton.textContent = 'Update';

                const deleteButton = document.createElement('button');
                deleteButton.classList.add('delete');
                // deleteButton.dataset.id = '07f260f4-466c-4607-9a33-f7273b24f1b4';
                deleteButton.textContent = 'Delete';

                if (result._ownerId === userId) {
                    updateButton.addEventListener('click', (e) => {
                        const currentCatchDiv = e.target.closest('.catch');
                        // Extract values from the correct catch div
                        const angler = currentCatchDiv.querySelector('.angler').value;
                        const weight = currentCatchDiv.querySelector('.weight').value;
                        const species = currentCatchDiv.querySelector('.species').value;
                        const locationUpdate = currentCatchDiv.querySelector('.location').value;
                        const bait = currentCatchDiv.querySelector('.bait').value;
                        const captureTime = currentCatchDiv.querySelector('.captureTime').value;

                        fetch(`${catchesUrl}/${result._id}`, {
                            method: 'PUT',
                            headers: {
                                'Content-type': 'application/json',
                                'X-Authorization': accessToken
                            },
                            body: JSON.stringify({ angler, weight, species, location: locationUpdate, bait, captureTime })
                        })
                            .then(res => res.json())
                            .then(() => {
                                location.href = 'index.html';
                            })
                            .catch(err => console.error("Update Error:", err));
                    })
                    deleteButton.addEventListener('click', (e) => {
                        const userId = localStorage.getItem('id');



                        fetch(`${catchesUrl}/${result._id}`, {
                            method: 'DELETE',
                            headers: {
                                'Content-type': 'application/json',
                                'X-Authorization': accessToken
                            }
                        })
                            .then(res => res.json())
                            .then(() => {
                                location.href = 'index.html';
                            })
                            .catch(err => console.error("Update Error:", err));


                    });

                } else {
                    updateButton.disabled = 'true';
                    deleteButton.disabled = 'true';
                }

                catchDiv.appendChild(updateButton);
                catchDiv.appendChild(deleteButton);
                catches.appendChild(catchDiv);


            })


        })
};

function createCatch(e) {

    e.preventDefault();
    console.log('TESTSSSS');


    const formData = new FormData(addCatch);

    const angler = formData.get('angler');
    const weight = formData.get('weight');
    const species = formData.get('species');
    const locationCatch = formData.get('location');
    const bait = formData.get('bait');
    const captureTime = formData.get('captureTime');

    if (angler || weight || species || locationCatch || bait || captureTime) {
        fetch(catchesUrl, {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
                'X-Authorization': accessToken
            },
            body: JSON.stringify({
                angler: angler,
                weight: weight,
                species: species,
                location: locationCatch,
                bait: bait,
                captureTime: captureTime
            })
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                location.href = 'index.html';
            })
            .catch(err => {
                console.log(err.message);
            });

    } else {
        alert('One or more fields are empty');
        addCatch.reset();
    }



}










