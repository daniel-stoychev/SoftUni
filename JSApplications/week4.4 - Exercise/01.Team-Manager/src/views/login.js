import { html, nothing } from "lit-html";
import { login } from "../data/users.js";


const loginTemplate = (onLogin, errorMessage) => html`
    <section id="login">
        <article class="narrow">
            <header class="pad-med">
                <h1>Login</h1>
            </header>
            <form @submit=${onLogin} id="login-form" class="main-form pad-large">

                ${errorMessage
        ? html`<div class="error">${errorMessage}.</div>`
        : nothing}
                
                <label>E-mail: <input type="text" name="email"></label>
                <label>Password: <input type="password" name="password"></label>
                <input class="action cta" type="submit" value="Sign In">
            </form>
            <footer class="pad-small">Don't have an account? <a href="/register" class="invert">Sign up here</a>
            </footer>
        </article>
    </section>
`;

export function loginView(ctx) {
    console.log(ctx);

    updateView();

    function updateView(errorMessage) {
        ctx.render(loginTemplate(onLogin, errorMessage));
    }

    async function onLogin(event) {
        event.preventDefault();
        const formData = new FormData(event.target);
        const data = Object.fromEntries(formData);

        try {
            await login(data.email, data.password);
            ctx.page.redirect('/teams');
        } catch (err) {
            err.handled = true;
            updateView(err.message);
        }
    }
}



// The logged in user can be logged out by clicking the logout button. 
// Write the functionality for this action. After logout redirect to Home page.