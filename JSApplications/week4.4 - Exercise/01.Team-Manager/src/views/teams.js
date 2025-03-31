import { html, nothing } from "lit-html";
import { getAllTeams } from "../data/teams.js";
import { teamPartial } from "./partials/team.js";
import { getAllMembers } from "../data/members.js";
import { addMembersToTeams } from "../utils.js";
import { showModal } from "./modal.js"
import page from "page";

const teamsTemplate = (hasUser, teams) => html`
    <section id="browse">

        <article class="pad-med">
            <h1>Team Browser</h1>
        </article>


        ${hasUser
        ? html`<article class="layout narrow">
            <div class="pad-small"><a @click=${createTeam} href="javascript:void(0)" class="action cta">Create Team</a></div>
        </article>`
        : nothing}

        ${teams.map(teamPartial)};

    </section>
`;


export async function teamsView(ctx) {
    const [teams, members] = await Promise.all([
        getAllTeams(),
        getAllMembers()
    ]);

    addMembersToTeams(teams, members);

    ctx.render(teamsTemplate(ctx.userData, teams));
    //,onRemoveMember---------------------------^

    // async function onRemoveMember() {
    //     // get confirmation
    //     // const choice = await showModal('Are you sure you want to remove Peter from the team?');
    //     console.log(choice);



    //     // if confirmed
    //     // - make request to remove meber from team
    //     // - show success
    //     // - redirect to same page

    //     // if cacnelled
    //     // - do nothing
    // }

};


function createTeam() {
    page.redirect('/createteam');
}