import { baseRender, html } from "../lib/lit-html.js";
import { getUserData } from "../utils/userUrils.js";

const navEl = document.querySelector('header');

const template = (hasUser) => html`
<a id="logo" href="/"><img id="logo-img" src="./images/logo2.png" alt="logo" />
      </a>
      <nav>
        <div>
          <a href="/dashboard">Solutions</a>
        </div>
        ${hasUser
    ? html`<!-- Logged-in users -->
        <div class="user">
          <a href="/create">Add Solution</a>
          <a href="/logout">Logout</a>
        </div>`
    : html`<!-- Guest users -->
        <div class="guest">
          <a href="/login">Login</a>
          <a href="/register">Register</a>
        </div>`}
      </nav>
`;

export default async function navigation(ctx, next) {

  const userData = getUserData();

  baseRender(template(userData.id), navEl);
  next();
}