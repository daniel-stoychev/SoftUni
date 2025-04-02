import { html, nothing } from "lit-html";
import { getTeamDetails } from "../data/teams.js";
import { getAllMembers, getTeamMemberships } from "../data/members.js";
import { getUserData } from "../utils.js";

const teamDetailsTemplate = (hasUser, teamData, teamMeberData, memebersCount, isOwner, isMember, hasStatusPending, userId) => html`
    <section id="team-home">
        <article class="layout">
            <img src="${teamData.logoUrl}" class="team-logo left-col">
            <div class="tm-preview">
                <h2>${teamData.name}</h2>
                <p>${teamData.description}</p>
                <span class="details">${memebersCount} Members</span>
                ${hasUser && isOwner
        ? html`<div>
                        <a href="#" class="action">Edit team</a>`
        : !isMember ? html`
                        <a href="#" class="action">Join team</a>`
            : html`
                        <a href="/leave/${userId}" class="action invert">Leave team</a>
                        ${hasStatusPending ? html`Membership pending. <a href="#">Cancel request</a>` : nothing}
                        
                        </div>`}               
            </div>
            <div class="pad-large">
                <h3>Members</h3>
                ${hasUser
        ? html`<ul class="tm-members">
                    <li>My Username</li>`
        : nothing}
                    ${teamMeberData.map((memeber) =>
            html`<li>${memeber.user.username}${isOwner ? html`<a href="#" class="tm-control action">Remove from team</a>` : nothing}</li>`)}
                    
                </ul>
        
                
            </div>
            ${isOwner
        ? html`<div class="pad-large">
                <h3>Membership Requests</h3>
                <ul class="tm-members">
                    <li>John<a href="#" class="tm-control action">Approve</a><a href="#"
                            class="tm-control action">Decline</a></li>
                    <li>Preya<a href="#" class="tm-control action">Approve</a><a href="#"
                            class="tm-control action">Decline</a></li>
                </ul>
            </div>`
        : nothing}
            
        </article>
    </section>
`;

export async function teamDetailsView(ctx) {

    /////////Team
    const teamData = await getTeamDetails(ctx.params.teamId);
    const teamId = ctx.params.teamId;
    console.log("TEAM DATA:");
    console.log(teamId);

    console.log(teamData);
    const teamOwnerId = teamData._ownerId;
    /////////Members 
    const memebersData = await getAllMembers(ctx);
    console.log("MEMBERS DATA:");
    console.log(memebersData);

    const teamMeberData = await getTeamMemberships(teamId);
    console.log("TEAM MEMBERS DATA:");
    console.log(teamMeberData);

    const memebersCount = teamMeberData.length;

    /////////Logged in user
    const userData = getUserData();
    let loggedInUserId;
    if (userData) {
        loggedInUserId = userData.id;
    }


    /////////Check if owner or member
    let isOwner;
    if (teamOwnerId === loggedInUserId) {
        isOwner = true;
    }

    /////////Check if member
    let isMember = teamMeberData.some(member => member.user._id === loggedInUserId);

    /////////Check if has pending status
    let hasStatusPending = teamMeberData.some(member => member.status === "pending");

    /////////Obtatining the currect user ID
    const userIds = teamMeberData.map(member => member.user._id);
    let userId;
    for (const user of userIds) {
        if (user === loggedInUserId) {
            userId = loggedInUserId;
        }
    }

    ctx.render(teamDetailsTemplate(ctx.userData, teamData, teamMeberData, memebersCount, isOwner, isMember, hasStatusPending, userId));

}


//set user permissions OR what guest/user can see - done
// take the members data - done
// show actual members
// check why dirtect team details link does not work
//update data 



// users:
// - gues user 
// - owener 
// - logged in user / not a member
// - logged in user / penmding
// - logged in user / a memeber

