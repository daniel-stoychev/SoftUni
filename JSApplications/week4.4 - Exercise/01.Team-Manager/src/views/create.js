import { html, nothing } from "lit-html";

const teamCreateTemplate = (onCreate, errorMessage) => html`
    <section id="create">
        <article class="narrow">
            <header class="pad-med">
                <h1>New Team</h1>
            </header>
            <form @submit=${onCreate} id="create-form" class="main-form pad-large">
                ${errorMessage
        ? html`<div class="error">${errorMessage}</div>`
        : nothing}
                <label>Team name: <input type="text" name="name"></label>
                <label>Logo URL: <input type="text" name="logoUrl"></label>
                <label>Description: <textarea name="description"></textarea></label>
                <input class="action cta" type="submit" value="Create Team">
            </form>
        </article>
    </section>
`;

export function createTeamView(ctx) {
    updateView();

    function updateView(errorMessage) {
        ctx.render(teamCreateTemplate(onCreate, errorMessage));
    }


    function onCreate(e) {
        e.preventDefault();
        console.log('TEST');
        const formData = new FormData(e.target);
        const data = Object.fromEntries(formData);

        if (!data.name || data.name.length < 4) {
            updateView('Name is missing or shorter than 4 characters');
            return;
        } else if (!data.logoUrl) {
            updateView('Logo Url is required');
            return;
        } else if (!data.description || data.description.length < 10) {
            updateView('Description is missing or shorter than 10 characters');
            return;
        } else {
            console.log('success');
            console.log(data);


            // await register(data.email, data.username, data.password);
            // ctx.page.redirect('/');
        }


    }


    // ctx.page.redirect('/');
}



// finally redirect to Team Detail Page
// REST FOR CREATE ?