import { getOneItem } from "../api/items.js";
import { render, html } from "../lib/lit-html.js"
import { getUserData } from "../utils/userUtils.js";

const template = (itemDetails, isOnwer) => html`
    <section id="details">
        <div id="details-wrapper">
            <div>
                <img id="details-img" src="${itemDetails.imageUrl}" alt="example1" />
                <p id="details-model">${itemDetails.model}</p>
            </div>
            <div id="info-wrapper">
                <div id="details-description">
                    <p class="details-price">Price: €${itemDetails.price}</p>
                    <p class="details-condition">Condition: ${itemDetails.condition}</p>
                    <p class="details-weight">Weight: ${itemDetails.weight}g</p>
                    <p class="drone-description">
                    ${itemDetails.description}
                    </p>
                    <p class="phone-number">Phone: ${itemDetails.phone}</p>
                </div>
                <!--Edit and Delete are only for creator-->
                ${isOnwer
        ? html`
                        <div class="buttons">
                            <a href="/edit/${itemDetails._id}" id="edit-btn">Edit</a>
                            <a href="/delete/${itemDetails._id}" id="delete-btn">Delete</a>
                        </div>`
        : ''}
            
            </div>
        </div>
      </section>
`;

export default async function detailsView(ctx) {

    const itemDetails = await getOneItem(ctx.params.id);
    let isOnwer;
    const userData = getUserData();
    if (userData.id === itemDetails._ownerId) {
        isOnwer = true;
    }



    render(template(itemDetails, isOnwer));
}



