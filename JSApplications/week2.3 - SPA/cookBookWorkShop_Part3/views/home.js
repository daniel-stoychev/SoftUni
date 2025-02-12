const sectionEl = document.querySelector('#home-section');
const mainEl = document.querySelector('main');

export default function homePage() {
    mainEl.innerHTML = '';
    sectionEl.innerHTML = '';
    sectionEl.style.display = 'block';
    loadRecipies();
    mainEl.appendChild(sectionEl);
}

function loadRecipies() {
    const recipiesURL = `http://localhost:3030/data/recipes`;

    fetch(recipiesURL)
        .then((response) => response.json())
        .then((data) => {
            sectionEl.innerHTML = '';
            // console.log(Object.values(data));
            const recipiesObj = Object.values(data);
            // mainEl.append(...recipiesObj.map(createRecipies));
            recipiesObj.forEach((recipie) => createRecipies(recipie));

        })
        .catch((err) => alert(err.message));

};

function createRecipies(recipie) {
    const titleEl = document.createElement('h2');
    titleEl.textContent = recipie.name;
    const titleDiv = document.createElement('div');
    titleDiv.classList.add('title');
    titleDiv.appendChild(titleEl);

    const imgEl = document.createElement('img');
    imgEl.src = recipie.img;
    const smallDiv = document.createElement('div');
    smallDiv.classList.add('small');
    smallDiv.appendChild(imgEl);

    const articleEl = document.createElement('article');
    articleEl.classList.add('preview');
    articleEl.append(titleDiv, smallDiv);

    articleEl.addEventListener('click', () => {
        const recipieDetailsURL = `http://localhost:3030/data/recipes/${recipie._id}`;
        console.log(recipieDetailsURL);

        fetch(recipieDetailsURL)
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                sectionEl.innerHTML = '';
                sectionEl.appendChild(loadRecipie(data));
            });

    });

    sectionEl.appendChild(articleEl);
};


function loadRecipie(recipieData) {
    const articleEl = document.createElement('article');

    // Create and append h2 for title
    const titleEl = document.createElement('h2');
    titleEl.textContent = recipieData.name;
    articleEl.appendChild(titleEl);

    // Create the 'band' div
    const bandDiv = document.createElement('div');
    bandDiv.classList.add('band');

    // Create the 'thumb' div and append img
    const thumbDiv = document.createElement('div');
    thumbDiv.classList.add('thumb');
    const imgEl = document.createElement('img');
    imgEl.src = recipieData.img; // Set img source
    thumbDiv.appendChild(imgEl);

    // Create the 'ingredients' div and append h3 and ul
    const ingredientsDiv = document.createElement('div');
    ingredientsDiv.classList.add('ingredients');
    const ingredientsTitleEl = document.createElement('h3');
    ingredientsTitleEl.textContent = 'Ingredients:';
    ingredientsDiv.appendChild(ingredientsTitleEl);
    const ingredientsListEl = document.createElement('ul');
    ingredientsDiv.appendChild(ingredientsListEl);

    recipieData.ingredients.forEach((ingredient) => {
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
    recipieData.steps.forEach((step) => {
        const pEl = document.createElement('p');
        descriptionDiv.appendChild(pEl);
        pEl.textContent = step;
    });
    // Append 'band' and 'description' divs to article
    articleEl.append(bandDiv, descriptionDiv);

    // EDIT and DELETE buttons
    const loggedInUserId = localStorage.getItem('owner');
    if (loggedInUserId === recipieData._ownerId) {
        const editBtn = document.createElement('button');
        editBtn.textContent = 'Edit';
        editBtn.classList.add('editBtn');

        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Delete';
        deleteBtn.classList.add('deleteBtn');

        const buttonsSection = document.createElement('div');
        buttonsSection.classList.add('buttonsSection');

        buttonsSection.append(editBtn, deleteBtn);
        articleEl.appendChild(buttonsSection);

        editBtn.addEventListener('click', editRecipe);
        deleteBtn.addEventListener('click', deleteRecipe);

    }

    // Return the constructed article element
    return articleEl;
};

function editRecipe() {
    console.log('edited');

};

function deleteRecipe() {
    console.log('deleted');

};
