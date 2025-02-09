const logourBtn = document.querySelector('#logoutBtn');
const baseURL = 'http://localhost:3030/users';

logourBtn.addEventListener("click", () => {
    fetch(`${baseURL}/logout`)
        .then(response => response.json())
        .then(data => {
            console.log("LOGOUT TEST");

            console.log(data);

            localStorage.clear();
            location.href = 'http://127.0.0.1:5500/JSApplications/week2.3%20-%20SPA/cookBookWorkShop_Part3/index.html';

        });

})