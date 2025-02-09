const createForm = document.querySelector('main article form');
const baseURL = 'http://localhost:3030/data/recipes';

createForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const recipeForm = new FormData(e.currentTarget);
    const data = Object.fromEntries(recipeForm);
    console.log(data);

    data.ingredients = data.ingredients.split('\n');
    data.steps = data.steps.split('\n');
    const accessToken = localStorage.getItem('accessToken');
    console.log(accessToken);

    fetch(baseURL, {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            'Content-type': 'application/json',
            'X-Authorization': accessToken
        }
    })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            location.href = 'http://127.0.0.1:5500/JSApplications/week2.3%20-%20SPA/cookBookWorkShop_Part3/index.html';
        })


});





