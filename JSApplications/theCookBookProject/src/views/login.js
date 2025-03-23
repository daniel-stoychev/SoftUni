import { html, render } from 'https://unpkg.com/lit-html?module';
import auth from "../api/auth.js";
import homePage from "./home.js";
import renderNavigation from "../app.js";

const sectionEl = document.querySelector('#login-section');
const mainEl = document.querySelector('main');

export default function loginPage() {
    mainEl.innerHTML = '';
    mainEl.appendChild(sectionEl);
    render(loginPageTemp(), sectionEl)
}

function loginPageTemp() {
    return html`
        <h2>Login</h2>
        <form @submit = ${onSubmit}>
            <label>E-mail: <input type="text" name="email" /></label>
            <label>Password: <input type="password" name="password" /></label>
            <input type="submit" value="Login" />
        </form>
    `;
}

function onSubmit(e) {

    e.preventDefault();
    const { email, password } = Object.fromEntries(new FormData(e.currentTarget));

    auth.login(email, password)
        .then(() => {
            renderNavigation();
            homePage();

        })
        .catch(err => alert(err.message));
}