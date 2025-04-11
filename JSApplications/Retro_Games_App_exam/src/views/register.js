import { register } from '../api/users.js';
import { html, render } from '../lib/lit-html.js';
import page from '../lib/page.js';
import { saveUserData } from '../utils/userUtils.js';


const template = (onSubmit) => html`
    <section id="register">
        <div class="form">
          <h2>Register</h2>
          <form @submit=${onSubmit} class="register-form">
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

    render(template(registerSubmitHandler));
}

async function registerSubmitHandler(e) {
    e.preventDefault();

    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);
    console.log(data);


    const hasEmptyValues = Object.values(data).some(value => value === '');

    if (hasEmptyValues) {
        return window.alert('One or more field are empty');
    }

    if (data['re-password'] !== data.password) {
        return window.alert('Password & Repassword must be the same');
    }

    try {
        const userData = await register(data.email, data.password);
        saveUserData(userData);
        page.redirect('/');

    } catch (err) {
        alert(err.message);
    }


}