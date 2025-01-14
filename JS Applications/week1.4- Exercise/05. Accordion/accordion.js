function solution() {
    const mainEl = document.getElementById('main');
    const url = `http://localhost:3030/jsonstore/advanced/articles/list`;


    fetch(url)
        .then((response) => response.json())
        .then((result) => {
            console.log(result);

        })
        .catch((err) => err);




}



window.addEventListener('load', solution);