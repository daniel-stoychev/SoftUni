import { html, render } from 'https://unpkg.com/lit-html?module';
import editRecipeForm from "./edit.js"
import deleteRecipe from "./DELETE.js"

const mainEl = document.querySelector('main');
const sectionEl = document.querySelector('#home-section');
const articleEl = document.querySelector('.preview');

export default function loadRecipe(recipeData) {
    console.log('TEST');
    mainEl.innerHTML = '';
    mainEl.appendChild(sectionEl);
    render(loadRecipeTemp(recipeData), sectionEl);
};

function loadRecipeTemp(data) {
    const loggedInUserId = localStorage.getItem('owner');
    console.log(data._ownerId);
    console.log(loggedInUserId);

    return html`
        <article>
            <h2>${data.name}</h2>
            <div class="band">
                <div class="thumb">
                    <img src="${data.img}" alt="${data.name}">
                </div>
                <div class="ingredients">
                    <h3>Ingredients:</h3>
                    <ul>
                        ${data.ingredients.map(ingredient => html`
                            <li>${ingredient}</li>
                        `)}
                    </ul>
                </div>
            </div>
            <div class="description">
                <h3>Preparation:</h3>
                ${data.steps.map(step => html`
                    <p>${step}</p>
                `)}
            </div>
            ${loggedInUserId === data._ownerId ? html`
                <div class="buttonsSection">
                    <button class="editBtn" @click=${() => editRecipe(data._id)}>Edit</button>
                    <button class="deleteBtn" @click=${() => deleteRecipe(data._id, articleEl)}>Delete</button>
                </div>
            ` : ''}
        </article>
    `;
}

function editRecipe(recipeId) {
    console.log(recipeId);

    editRecipeForm(recipeId);
};