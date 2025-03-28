import { html, render } from 'https://unpkg.com/lit-html?module';

const recipiesURL = `http://localhost:3030/data/recipes`;
const mainEl = document.querySelector('main');
const sectionEl = document.querySelector('#home-section');

export default function deleteRecipe(recipeId, articleEl) {
    const accessToken = localStorage.getItem('accessToken');
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
            mainEl.innerHTML = '';
            mainEl.appendChild(sectionEl);
            render(recipeDeletedTemplate, sectionEl);

        });
};

