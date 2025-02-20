// import loadRecipie from "./home.js";

const recipiesURL = `http://localhost:3030/data/recipes`;

const mainEl = document.querySelector('main');

export default function editRecipeForm(recipeId) {
    // console.log(recipeId);


    fetch(`${recipiesURL}/${recipeId}`)
        .then(res => res.json())
        .then(data => {
            // console.log(data);

            // Create the section element
            const section = document.createElement('section');
            section.className = 'site-section';
            section.id = 'home-section';
            section.style.display = 'block';

            // Create the heading
            const heading = document.createElement('h2');
            heading.textContent = 'Edit Recipe';

            // Create the form element
            const form = document.createElement('form');

            // Create and append the Name label and input
            const nameLabel = document.createElement('label');
            nameLabel.textContent = 'Name: ';
            const nameInput = document.createElement('input');
            nameInput.type = 'text';
            nameInput.name = 'name';
            nameInput.value = data.name;
            nameLabel.appendChild(nameInput);

            // Create and append the Image label and input
            const imageLabel = document.createElement('label');
            imageLabel.textContent = 'Image: ';
            const imageInput = document.createElement('input');
            imageInput.type = 'text';
            imageInput.name = 'img';
            imageInput.value = data.img;
            imageLabel.appendChild(imageInput);

            // Create and append the Ingredients label and textarea
            const ingredientsLabel = document.createElement('label');
            ingredientsLabel.textContent = 'Ingredients:';
            ingredientsLabel.className = 'ml';
            const ingredientsTextarea = document.createElement('textarea');
            ingredientsTextarea.name = 'ingredients';
            ingredientsTextarea.value = data.ingredients.join('\n');
            // ingredientsTextarea.value = ingredientsTextarea.value.split('\n');
            ingredientsLabel.appendChild(ingredientsTextarea);

            // Create and append the Preparation label and textarea
            const preparationLabel = document.createElement('label');
            preparationLabel.textContent = 'Preparation:';
            preparationLabel.className = 'ml';
            const preparationTextarea = document.createElement('textarea');
            preparationTextarea.name = 'steps';
            preparationTextarea.value = data.steps.join('\n');;
            // preparationTextarea.value = preparationTextarea.value.split('\n');
            preparationLabel.appendChild(preparationTextarea);

            // Create and append the submit button
            const submitInput = document.createElement('input');
            submitInput.type = 'submit';
            submitInput.value = 'Update Recipe';
            submitInput.addEventListener('click', (e) => {
                e.preventDefault();
                updateRecipe(nameInput.value, imageInput.value, ingredientsTextarea.value, preparationTextarea.value);
            });

            // Append all elements to the form
            form.appendChild(nameLabel);
            form.appendChild(imageLabel);
            form.appendChild(ingredientsLabel);
            form.appendChild(preparationLabel);
            form.appendChild(submitInput);

            // Append the heading and form to the section
            section.appendChild(heading);
            section.appendChild(form);

            // Assuming you want to append this section to the body or a specific container
            mainEl.appendChild(section); // Or replace document.body with a specific container
        })


    function updateRecipe(name, img, ingredients, steps) {
        const accessToken = localStorage.getItem('accessToken')
        ingredients = ingredients.split('\n'); // Filter to remove any empty strings
        steps = steps.split('\n'); // Filter to remove any empty strings

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
                loadDetails(recipeId);
            })

    }

}

function loadDetails(recipeId) {
    const recipieDetailsURL = `${recipiesURL}/${recipeId}`;
    const sectionEl = document.querySelector('#home-section');
    sectionEl.innerHTML = '';

    // articleEl.classList.add('preview');
    fetch(recipieDetailsURL)
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
            const articleEl = document.createElement('article');

            // Create and append h2 for title
            const titleEl = document.createElement('h2');
            titleEl.textContent = data.name;
            articleEl.appendChild(titleEl);

            // Create the 'band' div
            const bandDiv = document.createElement('div');
            bandDiv.classList.add('band');

            // Create the 'thumb' div and append img
            const thumbDiv = document.createElement('div');
            thumbDiv.classList.add('thumb');
            const imgEl = document.createElement('img');
            imgEl.src = data.img; // Set img source
            thumbDiv.appendChild(imgEl);

            // Create the 'ingredients' div and append h3 and ul
            const ingredientsDiv = document.createElement('div');
            ingredientsDiv.classList.add('ingredients');
            const ingredientsTitleEl = document.createElement('h3');
            ingredientsTitleEl.textContent = 'Ingredients:';
            ingredientsDiv.appendChild(ingredientsTitleEl);
            const ingredientsListEl = document.createElement('ul');
            ingredientsDiv.appendChild(ingredientsListEl);

            data.ingredients.forEach((ingredient) => {
                // console.log(ingredient);

                const liEl = document.createElement('li');
                ingredientsListEl.appendChild(liEl);
                liEl.textContent = ingredient;
            });

            // Append 'thumb' and 'ingredients' divs to 'band' div
            bandDiv.append(thumbDiv, ingredientsDiv);

            // Create the 'description' div and append h3
            const descriptionDiv = document.createElement('div');
            descriptionDiv.classList.add('description');
            const preparationTitleEl = document.createElement('h3');
            preparationTitleEl.textContent = 'Preparation:';
            descriptionDiv.appendChild(preparationTitleEl);
            data.steps.forEach((step) => {
                const pEl = document.createElement('p');
                descriptionDiv.appendChild(pEl);
                pEl.textContent = step;
            });
            // Append 'band' and 'description' divs to article
            articleEl.append(bandDiv, descriptionDiv);
            sectionEl.appendChild(articleEl);

        });

}

