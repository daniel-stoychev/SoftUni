import { getItemDetails } from "../api/marketItems.js";
import { render, html } from "../lib/lit-html.js";
import { getUserData } from "../utils/userUtils.js";

const template = (details, isOwner) => html`
    <section id="details">
        <div id="details-wrapper">
          <div>
            <img id="details-img" src=${details.imageUrl} alt="example1" />
            <p id="details-title">${details.item}</p>
          </div>
          <div id="info-wrapper">
            <div id="details-description">
              <p class="details-price">Price: €${details.price}</p>
              <p class="details-availability">
                ${details.availability}
              </p>
              <p class="type">Type: ${details.type}</p>
              <p id="item-description">
                ${details.description}
              </p>
            </div>
            ${isOwner
    ? html`<div id="action-buttons">
              <a href="/edit/${details._id}" id="edit-btn">Edit</a>
              <a href="/delete/${details._id}" id="delete-btn">Delete</a>
            </div>`
    : ''}
            
          </div>
        </div>
    </section>
`;

export default async function detailsView(ctx) {

  const details = await getItemDetails(ctx.params.id);
  const userData = getUserData();

  const itemOwnerId = details._ownerId;
  const userId = userData._id;

  let isOwner;
  if (itemOwnerId === userId) {
    isOwner = true;
  }


  render(template(details, isOwner));
}