
import { getOneItem } from '../api/items.js';
import { html, render } from '../lib/lit-html.js';
import { getUserData } from '../utils/userUrils.js';


const template = (itemDetails, isOwner, hasUser) => html`
    <section id="details">
        <div id="details-wrapper">
            <img id="details-img" src=${itemDetails.imageUrl} alt="example1" />
            <div>
                    <p id="details-type">${itemDetails.type}</p>
                    <div id="info-wrapper">
                    <div id="details-description">
                        <p id="description">
                        ${itemDetails.description}
                        </p>
                        <p id="more-info">
                        ${itemDetails.learnMore}
                        </p>
                    </div>
                    </div>
                    <h3>Like Solution:<span id="like">0</span></h3>

 
                        <!--Edit and Delete are only for creator-->
                        <div id="action-buttons">
                        ${isOwner
        ? html`
                        <a href="/edit/${itemDetails._id}" id="edit-btn">Edit</a>
                        <a href="/delete/${itemDetails._id}" id="delete-btn">Delete</a>`
        : !isOwner && hasUser ? html`<!--Bonus - Only for logged-in users ( not authors )-->
                            <a href="#" id="like-btn">Like</a>` : ''}
                </div>
            </div>
        </div>
    </section>
`;

export default async function detailsView(ctx) {

    const itemDetails = await getOneItem(ctx.params.itemId);
    let isOwner;
    let hasUser;
    const { id } = getUserData();

    if (id === itemDetails._ownerId) {
        isOwner = true;
    }

    if (id !== null) {
        hasUser = true;
    }
    render(template(itemDetails, isOwner, hasUser));
}

