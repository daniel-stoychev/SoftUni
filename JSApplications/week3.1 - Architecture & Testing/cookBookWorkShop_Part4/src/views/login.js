import auth from "../api/auth.js";
import homePage from "./home.js";
import renderNavigation from "../app.js";

const sectionEl = document.querySelector('#login-section');
const loginForm = sectionEl.querySelector('form');
const mainEl = document.querySelector('main');

export default function loginPage() {
    mainEl.innerHTML = '';
    sectionEl.style.display = 'block';
    // console.log(loginForm);
    mainEl.appendChild(sectionEl);

    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const { email, password } = Object.fromEntries(new FormData(e.currentTarget));

        auth.login(email, password)
            .then(() => {
                renderNavigation();
                homePage();
            })
            .catch(err => alert(err.message));

    });
}

