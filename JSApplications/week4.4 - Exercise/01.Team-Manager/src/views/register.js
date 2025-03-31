

import { html, nothing } from "lit-html";
import { register } from "../data/users.js";

const registerTemplate = (onRegister, errorMessage) => html`
    <section id="register">
        <article class="narrow">
            <header class="pad-med">
                <h1>Register</h1>
            </header>
            <form @submit=${onRegister} id="register-form" class="main-form pad-large">
                ${errorMessage
        ? html`<div class="error">${errorMessage}</div>`
        : nothing}
                <label>E-mail: <input type="text" name="email"></label>
                <label>Username: <input type="text" name="username"></label>
                <label>Password: <input type="password" name="password"></label>
                <label>Repeat: <input type="password" name="repass"></label>
                <input class="action cta" type="submit" value="Create Account">
            </form>
            <footer class="pad-small">Already have an account? <a href="#" class="invert">Sign in here</a>
            </footer>
        </article>
    </section>
    `;

export function registerView(ctx) {

    updateView();

    function updateView(errorMessage) {
        ctx.render(registerTemplate(onRegister, errorMessage));
    }

    async function onRegister(e) {
        e.preventDefault();
        const formData = new FormData(e.target);
        const data = Object.fromEntries(formData);


        if (!data.email || !isValidEmail(data.email)) {
            updateView('Email is required or not valid');
            return;
        } else if (data.username.length < 3) {
            updateView('Username must be at least 3 characters long');
            return;
        } else if (data.password.length < 3) {
            updateView('Password must be at least 3 characters long');
            return;
        } else if (data.repass !== data.password) {
            updateView('Password and repeat password must be the same');
            return;
        } else {
            await register(data.email, data.username, data.password);
            ctx.page.redirect('/');
        }
    }

};

function isValidEmail(email) {
    // Regular expression for basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

