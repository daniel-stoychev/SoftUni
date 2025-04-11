import { render, html } from "../lib/lit-html.js"
import { getUserData } from "../utils/userUtils.js";

const template = (hasUser) => html`
    <section id="hero">
        <div id="hero-wrapper">
          <p id="hero-intro">
            Welcome to <span>Retro Games</span>, your ultimate destination for classic gaming! Relive the golden era
            of video
            games with our vast library of retro titles, spanning from 8-bit to 16-bit classics and beyond.
          </p>
          ${!hasUser ? html`<a href="/register" id='sign-up'>Level Up - Sign Up!</a>` : ``}
        </div>
    </section>
`;

export default function homeView() {

    const userData = getUserData();

    render(template(userData.id));
}