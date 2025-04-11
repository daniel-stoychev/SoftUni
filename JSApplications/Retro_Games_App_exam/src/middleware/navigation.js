import { baseRender, html } from "../lib/lit-html.js";
import { getUserData } from "../utils/userUtils.js";


const navEl = document.querySelector('header');

const template = (hasUser) => html`
        <a id="logo" href="/"><img id="logo-img" src="./images/logo.webp" alt="logo" /></a>
        <nav>
            <a href="/dashboard">Games</a>

            ${hasUser
        ? html`
                <div class="user">
                    <a href="/create">Add Game</a>
                    <a id="logout" href="/logout">Logout</a>
                </div>`
        : html`
                <div class="guest">
                    <a href="/login">Login</a>
                    <a href="/register">Register</a>
                </div>`
    }    
        </nav>
`;

export default async function navigation(ctx, next) {

    const userData = getUserData();

    baseRender(template(userData.id), navEl);
    next();
}