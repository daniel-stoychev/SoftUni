import { render as baseRender, html } from '../../node_modules/lit-html/lit-html.js';

const mainEl = document.querySelector('main');

export const render = (templateResult) => baseRender(templateResult, mainEl);

export {
    baseRender,
    html
}