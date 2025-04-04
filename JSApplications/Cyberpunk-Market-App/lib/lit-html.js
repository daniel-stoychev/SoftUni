import { render as baseRender, html } from '../node_modules/lit-html/lit-html.js';

const mainEl = document.getElementById('main-element');

export const render = (templateResult) => baseRender(templateResult, mainEl);

export {
    html,
    baseRender
}