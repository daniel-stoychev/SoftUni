const logourBtn = document.querySelector('#logoutBtn');
const baseURL = 'http://localhost:3030/users';

logourBtn.addEventListener("click", () => {
    fetch(`${baseURL}/logout`)
        .then(response => response.json())
        .then(data => {
            console.log("LOGOUT TEST");

            console.log(data);

            localStorage.clear();
            location.href = '/';

        });

})