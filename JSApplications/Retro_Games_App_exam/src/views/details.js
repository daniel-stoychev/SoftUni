
import { getAllLikes, getLikesForUser, getOneItem, likeItemRequest } from '../api/items.js';
import { html, render } from '../lib/lit-html.js';
import page from '../lib/page.js';

import { getUserData } from '../utils/userUtils.js';


const template = (itemDetails, isOwner, hasUser, likesCount, hasLiked) => html`
    <section id="details">
        <div id="details-wrapper">
          <img id="details-img" src=${itemDetails.imageUrl} alt="example1" />
          <div>
            <div id="info-wrapper">
              <p id="game-details-name">${itemDetails.name}</p>
              <div id="details-description">
                <p id="details-release-date">${itemDetails.releaseDate}</p>
                <p id="description">${itemDetails.description}</p>
              </div>
              <h3>Game Likes:<span id="like">${likesCount}</span></h3>
              <!--Edit and Delete are only for creator-->
              <div id="action-buttons">
              ${isOwner ? html`
                <a href="/edit/${itemDetails._id}" id="edit-btn">Edit</a>
                <a href="/delete/${itemDetails._id}" id="delete-btn">Delete</a>
                ` : !isOwner && hasUser && !hasLiked ? html`
                <!--Bonus - Only for logged-in users ( not authors )-->
                <a href="/like/${itemDetails._id}" id="like-btn">Like</a>
                ` : ``}
              </div>
            </div>
          </div>
        </div>
      </section>
`;

export default async function detailsView(ctx) {
    console.log(ctx);


    const itemDetails = await getOneItem(ctx.params.itemId);
    console.log(itemDetails);

    let isOwner;
    let hasUser;
    const { id } = getUserData();
    console.log(id);


    if (id === itemDetails._ownerId) {
        isOwner = true;
    }

    if (id !== null) {
        hasUser = true;
    }


    const itemID = itemDetails._id;

    //all likes count
    const likesCount = await getAllLikes(itemID);
    // get likes for user
    const hasLiked = await getLikesForUser(itemID, id)
    console.log(hasLiked);


    render(template(itemDetails, isOwner, hasUser, likesCount, hasLiked));
}

export async function likeItem(ctx) {
    console.log(ctx);

    const gameId = ctx.params.itemId;
    await likeItemRequest({ gameId });
    page.redirect(`/details/${ctx.params.itemId}`);

}

