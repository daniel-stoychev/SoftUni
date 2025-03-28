const baseURL = 'http://localhost:3030/data/recipes';

function create(data) {
    const accessToken = localStorage.getItem('accessToken');
    return fetch(baseURL, {
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
            if (data.code > 400) {
                throw new Error("Something went wrong");
            }
            return data;
        })
}

function loadRecipes() {
    return fetch(baseURL)
        .then((response) => response.json())
        .then((data) => {
            return data;
        })
        .catch((err) => alert(err.message));
}

const authRecipe = {
    create,
    loadRecipes
};

export default authRecipe;

