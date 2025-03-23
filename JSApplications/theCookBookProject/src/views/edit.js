import { html, render } from 'https://unpkg.com/lit-html?module';
import loadRecipe from "./load.js";

const recipiesURL = `http://localhost:3030/data/recipes`;
const mainEl = document.querySelector('main');

export default function editRecipeForm(recipeId) {

    fetch(`${recipiesURL}/${recipeId}`)
        .then(res => res.json())
        .then(data => {
            loadEditData(data);

        })
        .catch(err => alert(err.message));

}

function loadEditData(data) {
    render(loadEditDataTemp(data), mainEl);
}

function loadEditDataTemp(recipeData) {

    return html`
    <section class="site-section" id="home-section" style="display: block;">
        <h2>Edit Recipe</h2>
            <form @submit = ${(e) => updateRecipe(e, recipeData._id)}>
                <label>
                    Name: 
                    <input type="text" name="name" value="${recipeData.name}">
                </label>
                <label>
                    Image: 
                    <input type="text" name="img" value="${recipeData.img}">
                </label>
                <label class="ml">
                    Ingredients:
                    <textarea name="ingredients">${recipeData.ingredients.join('\n')}</textarea>
                </label>
                <label class="ml">
                    Preparation:
                    <textarea name="steps">${recipeData.steps.join('\n')}</textarea>
                </label>
                <input type="submit" value="Update Recipe">
            </form> 
    </section>
    `;
}

function updateRecipe(e, recipeId) {
    e.preventDefault();

    const accessToken = localStorage.getItem('accessToken')
    const formData = new FormData(e.target);

    // Extract updated values from the form
    const name = formData.get('name');
    const img = formData.get('img');
    const ingredients = formData.get('ingredients').split('\n').filter(Boolean);
    const steps = formData.get('steps').split('\n').filter(Boolean);

    fetch(`${recipiesURL}/${recipeId}`, {
        method: 'PUT',
        headers: {
            'Content-type': 'application/json',
            'X-Authorization': accessToken
        },
        body: JSON.stringify({ name, img, ingredients, steps })
    })
        .then(res => res.json())
        .then((data) => {
            // mainEl.innerHTML = '';
            loadRecipe(data);  // ???? where the recipeData is taken from?
        })
        .catch((err) => alert(err.message))

}

