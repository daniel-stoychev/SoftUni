import { html, render } from 'https://unpkg.com/lit-html?module';
import homePage from "./home.js";
import initNavigation from "./navigation.js";

const sectionEl = document.querySelector('#register-section');
const mainEl = document.querySelector('main');

const baseURL = 'http://localhost:3030/users';

export default function registerPage() {
    mainEl.innerHTML = '';
    mainEl.appendChild(sectionEl);
    render(registerTemp(), sectionEl);
}

function registerTemp() {
    return html`
        <h2>Register</h2>
        <form @submit = ${onSubmit}>
            <label>E-mail: <input type="text" name="email" /></label>
            <label>Password: <input type="password" name="password" /></label>
            <label>Repeat: <input type="password" name="rePass" /></label>
            <input type="submit" value="Register" />
        </form>
    `;
}

function onSubmit(e) {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);

    fetch(`${baseURL}/register`, {
        method: 'POST',
        body: JSON.stringify({
            email: formData.get('email'),
            password: formData.get('password')
        }),
        headers: {
            'Content-type': 'application/json'
        }
    })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if (data.code >= 400) {
                return alert(data.message);
            }
            localStorage.setItem('accessToken', data.accessToken);
            localStorage.setItem('email', data.email);
            localStorage.setItem('owner', data._id);
            mainEl.innerHTML = '';
            initNavigation();
            homePage();
        })
}

