import { html, render } from 'https://unpkg.com/lit-html?module';

import loadRecipe from "./load.js"

const recipiesURL = `http://localhost:3030/data/recipes`;
const sectionEl = document.querySelector('#home-section');
const mainEl = document.querySelector('main');


export default function homePage() {
    fetch(recipiesURL)
        .then((response) => response.json())
        .then((data) => {
            mainEl.innerHTML = '';
            mainEl.appendChild(sectionEl);
            render(loadExistingRecipesTemp(data), sectionEl)
        })
        .catch((err) => alert(err.message));

}

function loadExistingRecipesTemp(recipies) {

    return html`
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








