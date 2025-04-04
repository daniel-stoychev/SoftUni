import { login } from "../api/users.js";
import { render, html } from "../lib/lit-html.js";
import page from "../lib/page.js";
import { saveUserData } from "../utils/userUtils.js";

const template = (onSubmit) => html`
    <section id="login">
        <div class="form">
          <h2>Login</h2>
          <form @submit=${onSubmit} class="login-form">
            <input type="text" name="email" id="email" placeholder="email" />
            <input type="password" name="password" id="password" placeholder="password" />
            <button type="submit">login</button>
            <p class="message">
              Not registered? <a href="#">Create an account</a>
            </p>
          </form>
        </div>
    </section>
`;

export default async function loginView(ctx) {

    render(template(loginSubmitHandler.bind(ctx)))
}

async function loginSubmitHandler(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const email = formData.get('email');
    const password = formData.get('password');

    if (email === '' || password === '') {
        // return alert("Fields are required");
        return this.showNotification('All fields are required');
    }

    try {
        console.log('TESTLOGINS');

        const userData = await login(email, password);

        console.log(userData);

        saveUserData(userData);
        page.redirect('/');
    } catch (err) {
        alert(err.message)
    }

}