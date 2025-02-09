const logourBtn = document.querySelector('#logoutBtn');
const baseURL = 'http://localhost:3030/users';

logourBtn.addEventListener("click", () => {
    fetch(`${baseURL}/logout`)
        .then(response => response.json())
        .then(data => {
            console.log("LOGOUT TEST");

            console.log(data);

            localStorage.clear();
            location.href = 'http://127.0.0.1:5500/JSApplications/week2.1%20-%20Remote%20Data%20&%20Authentications/cookBookWorkShop_Part2/index.html';

        });

})