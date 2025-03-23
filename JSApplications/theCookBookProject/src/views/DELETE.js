// TODO
import { html, render } from 'https://unpkg.com/lit-html?module';
const accessToken = localStorage.getItem('accessToken');

const recipiesURL = `http://localhost:3030/data/recipes`;
const mainEl = document.querySelector('main');

export default function deleteRecipe(recipeId, articleEl) {
    fetch(`${recipiesURL}/${recipeId}`, {
        method: 'DELETE',
        headers: {
            'Content-type': 'application/json',
            'X-Authorization': accessToken
        }
    })
        .then(res => res.json())
        .then(() => {

            const recipeDeletedTemplate = html`
                <h2>Recipe deleted</h2>
            `;
            render(recipeDeletedTemplate, mainEl);

        });
};

