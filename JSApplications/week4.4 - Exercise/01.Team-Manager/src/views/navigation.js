import { html, render } from "lit-html";

const header = document.querySelector('.layout');

const navigationTemplate = (hasUser) => {
    return html`
    <a href="/" class="site-logo">Team Manager</a>
    <nav>
        <a href="/teams" class="action">Browse Teams</a>
        ${!hasUser
            ? html`
            <a href="/login" class="action">Login</a>
            <a href="/register" class="action">Register</a>
            `
            : html`
            <a href="#" class="action">My Teams</a>
            <a href="/logout" class="action">Logout</a>
            `
        }
    </nav> 
    `;
}


export function initNavigation(ctx, next) {
    const hasUser = localStorage.getItem('userData');
    render(navigationTemplate(!!hasUser), header);
    next();
}




