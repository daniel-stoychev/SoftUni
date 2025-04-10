import { login } from "../api/users.js";
import { render, html } from "../lib/lit-html.js"
import page from "../lib/page.js";
import { notifications } from "../middleware/notifications.js";

import { setUserData } from "../utils/userUtils.js";

const template = (onLogin) => html`
    <section id="login">
        <div class="form">
          <h2>Login</h2>
          <form @submit=${onLogin} class="login-form">
            <input type="text" name="email" id="email" placeholder="email" />
            <input type="password" name="password" id="password" placeholder="password" />
            <button type="submit">login</button>
            <p class="message">
              Not registered? <a href="/register">Create an account</a>
            </p>
          </form>
        </div>
    </section>
`;

export default async function loginView(ctx) {


    render(template(loginSUbmitHandler.bind(ctx)))
}

async function loginSUbmitHandler(e) {

    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);

    if (!data.email || !data.password) {
        // return window.alert('All fields required.');
        return this.showNotifications('All fields required.')
    }

    try {
        const userData = await login(data.email, data.password);
        console.log(userData);

        setUserData(userData);
        page.redirect('/');
    } catch (err) {
        alert(err.message)
    }

}