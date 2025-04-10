import { baseRender, html } from "../lib/lit-html.js";

const notificationEl = document.getElementById('errorBox');

const template = (message) => html`
      <span class="msg">${message}</span>
`;

export const notifications = (ctx, next) => {
    ctx.showNotifications = (message) => {
        baseRender(template(message), notificationEl);
        notificationEl.style.display = 'block';
        setTimeout(() => {
            notificationEl.style.display = 'none';
        }, 3000)
    }

    next();
}