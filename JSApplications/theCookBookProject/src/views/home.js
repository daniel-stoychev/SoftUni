// import { html, render } from "../../node_modules/lit-html/lit-html.js";
import { html, render } from 'https://unpkg.com/lit-html?module';
import editRecipeForm from "./edit.js"

const recipiesURL = `http://localhost:3030/data/recipes`;
let mainEl = document.querySelector('main');

export default function homePage() {
    console.log('HOMEPAGE TEST');
    mainEl.innerHTML = '';
    loadRecipies();
}

function loadRecipies() {
    fetch(recipiesURL)
        .then((response) => response.json())
        .then((data) => {
            const recipiesObj = Object.values(data);
            render(createRecipies(recipiesObj), mainEl);
        })
        .catch((err) => alert(err.message));

};

function createRecipies(recipies) {

    return html`
    <section class="site-section" id="home-section">
        ${recipies.map(recipeData => html`
            <article class="preview" @click=${() => onClick(recipeData._id)}>
                <div class="title">
                    <h2>${recipeData.name}</h2>
                </div>
                <div class="small">
                    <img src="${recipeData.img}" alt="Easy Lasagna"></img>
                </div>
            </article>
            ` )}
    </section>
    `
};

function onClick(recipe) {

    const recipieDetailsURL = `http://localhost:3030/data/recipes/${recipe}`;

    fetch(recipieDetailsURL)
        .then((response) => response.json())
        .then((data) => {
            render(loadRecipie(data), mainEl);
        });
}


export function loadRecipie(recipeData) {

    const loggedInUserId = localStorage.getItem('owner');

    return html`
        <article>
            <h2>${recipeData.name}</h2>
            <div class="band">
                <div class="thumb">
                    <img src="${recipeData.img}" alt="${recipeData.name}">
                </div>
                <div class="ingredients">
                    <h3>Ingredients:</h3>
                    <ul>
                        ${recipeData.ingredients.map(ingredient => html`
                            <li>${ingredient}</li>
                        `)}
                    </ul>
                </div>
            </div>
            <div class="description">
                <h3>Preparation:</h3>
                ${recipeData.steps.map(step => html`
                    <p>${step}</p>
                `)}
            </div>
            ${loggedInUserId === recipeData._ownerId ? html`
                <div class="buttonsSection">
                    <button class="editBtn" @click=${() => editRecipe(recipeData._id)}>Edit</button>
                    <button class="deleteBtn" @click=${() => deleteRecipe(recipeData._id)}>Delete</button>
                </div>
            ` : ''}
        </article>
    `;
};


const accessToken = localStorage.getItem('accessToken');

function editRecipe(recipeId) {
    mainEl.innerHTML = '';
    editRecipeForm(recipeId);
};

function deleteRecipe(recipeId, articleEl) {
    fetch(`${recipiesURL}/${recipeId}`, {
        method: 'DELETE',
        headers: {
            'Content-type': 'application/json',
            'X-Authorization': accessToken
        }
    })
        .then(res => res.json())
        .then(() => {
            const messageEl = document.createElement('h2');
            messageEl.textContent = 'Recipe deleted';
            articleEl.innerHTML = '';
            articleEl.appendChild(messageEl);

        });
};
