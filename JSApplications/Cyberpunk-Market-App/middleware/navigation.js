import { baseRender, html } from "../lib/lit-html.js";
import { getUserData } from "../utils/userUtils.js";

const navEl = document.querySelector('#wrapper > header');

export const navigation = (ctx, next) => {
  let hasUser;
  const userData = getUserData();
  if (userData.email !== null) {
    hasUser = true;
  }

  baseRender(template(hasUser), navEl)

  next();
}

const template = (hasUser) => html`
    <!-- Navigation -->
      <a id="logo" href="/"><img id="logo" src="./images/logo.png" alt="img" /></a>
      <nav>
        <div>
          <a href="/market">Market</a>
        </div>

        <!-- Logged-in users -->
        ${hasUser
    ? html`<div class="user">
          <a href="/create">Sell</a>
          <a href="/logout">Logout</a>
        </div>`
    : html`<!-- Guest users -->
        <div class="guest">
          <a href="/login">Login</a>
          <a href="/register">Register</a>
        </div>`}
     
      </nav>
`;

