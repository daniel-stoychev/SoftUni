import { register } from "../api/users.js";
import { render, html } from "../lib/lit-html.js";
import page from "../lib/page.js";
import { saveUserData } from "../utils/userUtils.js";

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

  render(template(registerSubmitHandler.bind(ctx)))
}

async function registerSubmitHandler(e) {
  e.preventDefault();
  const formData = new FormData(e.currentTarget);
  const email = formData.get('email');
  const password = formData.get('password');
  const rePassword = formData.get('re-password');

  if (email === '' || password === '' || rePassword === '') {
    return this.showNotification('All fields are required');
  }

  if (password !== rePassword) {
    return this.showNotification("Passwords don't match");
    // return alert("Passwords don't match");
  }

  try {
    const userData = await register(email, password);
    saveUserData(userData);
    page.redirect('/');

  } catch (err) {
    alert(err.message)
  }
}