import { baseRender, html } from "../lib/lit-html.js"
import { getUserData } from "../utils/userUtils.js";

const navUrl = document.querySelector('#wrapper > header');

const template = (hasUser) => html`
    <a id="logo" href="/"><img id="logo" src="./images/logo2.png" alt="img" /></a>
      <nav>
        <div>
            <a href="/dashboard">Marketplace</a>
        </div>

        ${hasUser
        ? html`
        <div class="user">
            <a href="/create">Sell</a>
            <a href="/logout">Logout</a>
        </div>`
        : html`
        <div class="guest">
            <a href="/login">Login</a>
            <a href="/register">Register</a>
        </div>`}
        
      </nav>
`;

export default async function navigationView(ctx, next) {

    const userData = getUserData();
    let isLoggedIn;
    if (userData.accessToken !== null) {
        isLoggedIn = true;
    }

    baseRender(template(isLoggedIn), navUrl);
    next();
}