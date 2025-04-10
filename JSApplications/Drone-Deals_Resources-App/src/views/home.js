import { render, html } from "../lib/lit-html.js"

const template = () => html`
    <section id="hero">
        <p>
          Discover the best deals on drones! Buy, sell, and trade top-quality drones with ease on Drone Deals - your
          trusted marketplace for all things drone.</p>
    </section>
`;

export default async function homeView(ctx) {
    render(template())
}



