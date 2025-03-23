import { html, render } from 'https://unpkg.com/lit-html?module';
import homePage from "./home.js"

const baseURL = 'http://localhost:3030/data/recipes';
const sectionEl = document.querySelector('#create-section');
const mainEl = document.querySelector('main');

export default function createRecipePage() {

    mainEl.innerHTML = '';
    mainEl.appendChild(sectionEl);
    render(createRecipeTemp(), sectionEl)
}

function createRecipeTemp() {
    return html`
        <h2>New Recipe</h2>
        <form @submit = ${(e) => createNewRecipe(e)}>
            <label>Name: <input type="text" name="name" placeholder="Recipe name" /></label>
            <label>Image: <input type="text" name="img" placeholder="Image URL" /></label>
            <label class="ml">Ingredients:
            <textarea name="ingredients" placeholder="Enter ingredients on separate lines"></textarea>
            </label>
            <label class="ml">Preparation:
            <textarea name="steps" placeholder="Enter preparation steps on separate lines"></textarea>
            </label>
            <input type="submit" value="Create Recipe" />
        </form>
    `;
}

function createNewRecipe(e) {
    e.preventDefault();
    console.log('Create recipe');
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
}






