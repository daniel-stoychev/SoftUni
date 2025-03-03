import { html, render } from "./node_modules/lit-html/lit-html.js";

const form = document.querySelector('form');
form.addEventListener('submit', onSumbmit);
const rootEl = document.querySelector('#root');

function onSumbmit(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const input = formData.get('towns').split(', ');

    renderer(createTemplate(input));

    // const rootEl = document.querySelector('#root');
    // const ulEl = document.createElement('ul');
    // rootEl.appendChild(ulEl);

    // input.forEach(inputEl => {
    //     const liEl = document.createElement('li');
    //     liEl.textContent = inputEl;
    //     ulEl.appendChild(liEl);


    // });

}

function createTemplate(towns) {
    return html`
    <ul>
        ${towns.map(town => html`<li>${town}</li>`)}
    </ul>
    `

};

function renderer(data) {
    render(data, rootEl)
};