import homePage from "./home.js";
import initNavigation from "../app.js";

export const logoutBtnEl = document.querySelector('#logoutBtn');
const baseURL = 'http://localhost:3030/users';


logoutBtnEl.addEventListener("click", () => {
    fetch(`${baseURL}/logout`)
        .then(response => response.json())
        .then(() => {
            localStorage.clear();
            initNavigation();
            homePage();
        });

})