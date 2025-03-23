// import { html, render } from "../../node_modules/lit-html/lit-html.js";
import { html, render } from 'https://unpkg.com/lit-html?module';

import loadRecipe from "./load.js"

const recipiesURL = `http://localhost:3030/data/recipes`;
const mainEl = document.querySelector('main');

export default function homePage() {
    // mainEl.innerHTML = '';
    loadExistingRecipes();
}

function loadExistingRecipes() {
    fetch(recipiesURL)
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
            serverRecipes(data);
        })
        .catch((err) => alert(err.message));

};

function serverRecipes(data) {
    render(loadExistingRecipesTemp(data), mainEl)
}

function loadExistingRecipesTemp(recipies) {

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








