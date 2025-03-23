// import { html, render } from "../../node_modules/lit-html/lit-html.js";
import { html, render } from 'https://unpkg.com/lit-html?module';
import editRecipeForm from "./edit.js"
import loadRecipe from "./load.js"

const recipiesURL = `http://localhost:3030/data/recipes`;
let mainEl = document.querySelector('main');

export default function homePage() {
    console.log('HOMEPAGE TEST');
    mainEl.innerHTML = '';
    LoadRecipes();
}

function LoadRecipes() {
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
            loadRecipe(data);
        });
}





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
