import page from "../../node_modules/page/page.mjs";
import { html } from "../../node_modules/lit-html/lit-html.js";
import { dataService } from "../service/dataService.js";
import { userHelper } from "../utility/userHelper.js";

const detailsTemp = (item, isOwner) => html`
        <div class="row space-top">
            <div class="col-md-12">
                <h1>Furniture Details</h1>
            </div>
        </div>
        <div class="row space-top">
            <div class="col-md-4">
                <div class="card text-white bg-primary">
                    <div class="card-body">
                        <img src="${item.img}" />
                    </div>
                </div>
            </div>
            <div class="col-md-4">
                <p>Make: <span>${item.make}</span></p>
                <p>Model: <span>${item.model}</span></p>
                <p>Year: <span>${item.year}</span></p>
                <p>Description: <span>${item.description}</span></p>
                <p>Price: <span>${item.price}</span></p>
                <p>Material: <span>${item.material}</span></p>
                <div>
                ${isOwner ? html`
                    <a href="#" class="btn btn-info" @click=${() => handleEditClick(item._id)} >Edit</a>
                    <a href="#" class="btn btn-red" @click=${() => handleDeleteClick(item._id)}>Delete</a>
                ` : ''}
                </div>
            </div>
        </div>
`;

//TO ADD EDIT & DELETE BUTTONS FOR OWNER USERS
/* <a href=”#” class="btn btn-info">Edit</a>
<a href=”#” class="btn btn-red">Delete</a> */

export async function showDetailsView(ctx) {

    // console.log(ctx);

    const data = await dataService.getFurnitureDetails(ctx.params.productId);
    // console.log(data);

    const isOwner = userHelper.hasOwner(data._ownerId);
    ctx.render(detailsTemp(data, isOwner));
}

async function handleDeleteClick(id) {
    console.log('Deleting item with ID:', id);
    await page.redirect(`/delete/${id}`);
}

async function handleEditClick(id) {
    await page.redirect(`/edit/${id}`);
}
