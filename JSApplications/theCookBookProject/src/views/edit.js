// import loadRecipie from "./home.js";
import { html, render } from 'https://unpkg.com/lit-html?module';
// import { loadRecipe } from "./load.js";

const recipiesURL = `http://localhost:3030/data/recipes`;

const mainEl = document.querySelector('main');
console.log(mainEl);


export default function editRecipeForm(recipeId) {

    fetch(`${recipiesURL}/${recipeId}`)
        .then(res => res.json())
        .then(data => {
            loadEditData(data);

        })
        .catch(err => alert(err.message));


    // function updateRecipe(name, img, ingredients, steps) {


    // }

}

function loadEditData(data) {
    console.log("LOAD edit data");

    render(loadEditDataTemp(data), mainEl);
}

function loadEditDataTemp(recipeData) {
    console.log('render test');
    console.log(recipeData);


    return html`
    <section class="site-section" id="home-section" style="display: block;">
        <h2>Edit Recipe</h2>
            <form @submit = ${(e) => updateRecipe(e, recipeData, recipeData._id)}>
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

function updateRecipe(e, recipeData, recipeId) {
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
        .then(() => {
            // mainEl.innerHTML = '';
            render(loadDetails(recipeData), mainEl);  // ???? where the recipeData is taken from?
        })
        .catch((err) => alert(err.message))

}

const loggedInUserId = localStorage.getItem('owner');

function loadDetails(data) {
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
                        <button class="deleteBtn" @click=${() => deleteRecipe(data._id)}>Delete</button>
                    </div>
                ` : ''}
            </article>
        `;

    // loadRecipe(recipeData);
    // const recipieDetailsURL = `${recipiesURL}/${recipeId}`;
    // const sectionEl = document.querySelector('#home-section');
    // sectionEl.innerHTML = '';

    // // articleEl.classList.add('preview');
    // fetch(recipieDetailsURL)
    //     .then((response) => response.json())
    //     .then((data) => {
    //         console.log(data);
    //         const articleEl = document.createElement('article');

    //         // Create and append h2 for title
    //         const titleEl = document.createElement('h2');
    //         titleEl.textContent = data.name;
    //         articleEl.appendChild(titleEl);

    //         // Create the 'band' div
    //         const bandDiv = document.createElement('div');
    //         bandDiv.classList.add('band');

    //         // Create the 'thumb' div and append img
    //         const thumbDiv = document.createElement('div');
    //         thumbDiv.classList.add('thumb');
    //         const imgEl = document.createElement('img');
    //         imgEl.src = data.img; // Set img source
    //         thumbDiv.appendChild(imgEl);

    //         // Create the 'ingredients' div and append h3 and ul
    //         const ingredientsDiv = document.createElement('div');
    //         ingredientsDiv.classList.add('ingredients');
    //         const ingredientsTitleEl = document.createElement('h3');
    //         ingredientsTitleEl.textContent = 'Ingredients:';
    //         ingredientsDiv.appendChild(ingredientsTitleEl);
    //         const ingredientsListEl = document.createElement('ul');
    //         ingredientsDiv.appendChild(ingredientsListEl);

    //         data.ingredients.forEach((ingredient) => {
    //             // console.log(ingredient);

    //             const liEl = document.createElement('li');
    //             ingredientsListEl.appendChild(liEl);
    //             liEl.textContent = ingredient;
    //         });

    //         // Append 'thumb' and 'ingredients' divs to 'band' div
    //         bandDiv.append(thumbDiv, ingredientsDiv);

    //         // Create the 'description' div and append h3
    //         const descriptionDiv = document.createElement('div');
    //         descriptionDiv.classList.add('description');
    //         const preparationTitleEl = document.createElement('h3');
    //         preparationTitleEl.textContent = 'Preparation:';
    //         descriptionDiv.appendChild(preparationTitleEl);
    //         data.steps.forEach((step) => {
    //             const pEl = document.createElement('p');
    //             descriptionDiv.appendChild(pEl);
    //             pEl.textContent = step;
    //         });
    //         // Append 'band' and 'description' divs to article
    //         articleEl.append(bandDiv, descriptionDiv);
    //         sectionEl.appendChild(articleEl);

    //     });

}

