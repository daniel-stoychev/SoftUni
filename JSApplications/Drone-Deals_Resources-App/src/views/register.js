import { register } from "../api/users.js";
import { render, html } from "../lib/lit-html.js"
import page from "../lib/page.js";
import { setUserData } from "../utils/userUtils.js";

const template = (onRegister) => html`
    <section id="register">
        <div class="form">
          <h2>Register</h2>
          <form @submit=${onRegister}class="register-form">
            <input type="text" name="email" id="register-email" placeholder="email" />
            <input type="password" name="password" id="register-password" placeholder="password" />
            <input type="password" name="re-password" id="repeat-password" placeholder="repeat password" />
            <button type="submit">register</button>
            <p class="message">Already registered? <a href="#">Login</a></p>
          </form>
        </div>
      </section>
`;

export default async function registerView(ctx) {


    render(template(registerSubmitHandler.bind(ctx)))
}

async function registerSubmitHandler(e) {

    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);
    console.log(data);


    if (!data.email || !data.password) {
        // return window.alert('All fields required.')
        return this.showNotifications("All fields required");
    }

    if (data.password !== data['re-password']) {
        // return alert("Passwords don't match");
        return this.showNotifications("Passwords don't match");
    }

    try {
        const userData = await register(data.email, data.password);
        setUserData(userData);
        page.redirect('/');
    } catch (err) {
        alert(err.message)
    }

}