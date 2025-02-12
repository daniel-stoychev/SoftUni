import homePage from "./home.js"

const baseURL = 'http://localhost:3030/data/recipes';

const sectionEl = document.querySelector('#create-section');
const mainEl = document.querySelector('main');
const createForm = sectionEl.querySelector('form');

export default function createPage() {
    mainEl.innerHTML = '';
    sectionEl.style.display = 'block';
    mainEl.appendChild(sectionEl);
};

createForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const recipeForm = new FormData(e.currentTarget);
    const data = Object.fromEntries(recipeForm);
    console.log(data);

    data.ingredients = data.ingredients.split('\n');
    data.steps = data.steps.split('\n');
    const accessToken = localStorage.getItem('accessToken');
    if (!data.name || !data.img || !data.ingredients || !data.steps) {
        return alert('One or more files are emty!');
    }

    fetch(baseURL, {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            'Content-type': 'application/json',
            'X-Authorization': accessToken
        }
    })
        .then(res => res.json())
        .then(data => {


            console.log(data);
            homePage();

        })


});





