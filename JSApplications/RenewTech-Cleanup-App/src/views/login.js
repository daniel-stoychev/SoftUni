import { login } from '../api/users.js';
import { html, render } from '../lib/lit-html.js';
import page from '../lib/page.js';
import { saveUserData } from '../utils/userUrils.js';


const template = (onSubmit) => html`
    <section id="login">
        <div class="form">
          <img class="border" src="./images/border.png" alt="" />
          <h2>Login</h2>
          <form @submit=${onSubmit}class="login-form">
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

    render(template(loginSubmitHandler));
}

async function loginSubmitHandler(e) {
    e.preventDefault();

    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);
    console.log(data);


    const hasEmptyValues = Object.values(data).some(value => value === '');

    if (hasEmptyValues) {
        return alert('One or more field are empty');
    }

    try {
        const userData = await login(data.email, data.password);
        saveUserData(userData);
        page.redirect('/');

    } catch (err) {
        alert(err.message);
    }


}