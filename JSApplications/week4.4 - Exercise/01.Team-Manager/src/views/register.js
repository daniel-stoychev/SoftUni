// if (!data.email) {
//     updateView('Email is required');
//     return;
// }

import { html } from "lit-html";
import { register } from "../data/users.js";

const registerTemplate = (onRegister) => html`
    <section id="register">
        <article class="narrow">
            <header class="pad-med">
                <h1>Register</h1>
            </header>
            <form @submit=${onRegister} id="register-form" class="main-form pad-large">
                <div class="error">Error message.</div>
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
    ctx.render(registerTemplate(onRegister));

    async function onRegister(e) {
        e.preventDefault();
        const formData = new FormData(e.target);
        const data = Object.fromEntries(formData);
        await register(data.email, data.username, data.password);
        ctx.page.redirect('/');


    }
};

