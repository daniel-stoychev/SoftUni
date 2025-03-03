import { cats } from "./catSeeder.js";
import { html, render } from "../node_modules/lit-html/lit-html.js";

const sectionEl = document.querySelector('#allCats');

function onLoad() {
    const catData = Object.values(cats);
    renderer(catsTemplate(catData));

}

function catsTemplate(catData) {
    return html`
    <ul>
        ${catData.map(cat => html`
            <li>
                <img src="./images/${cat.imageLocation}.jpg" width="250" height="250" alt="Card image cap">
                    <div class="info">
                        <button @click = ${statusCodeBtns} class="showBtn">Show status code</button>
                        <div class="status" style="display: none" id="${cat.id}">
                         <h4>Status Code: ${cat.statusCode}</h4>
                            <p>${cat.statusMessage}</p>
                        </div>
                 </div>
            </li>
            `)}
    </ul>
    `
}

function statusCodeBtns(e) {
    const statusEl = e.target.parentNode.querySelector('.status');
    const isHidden = statusEl.style.display === 'none';
    statusEl.style.display = isHidden ? 'block' : 'none';
    e.target.textContent = isHidden ? 'Hide status code' : 'Show status code';
}

function renderer(data) {
    render(data, sectionEl)
}

onLoad();