import { html } from "../../node_modules/lit-html/lit-html.js";
import { handleDetailsClick } from "./dashboardView.js";
import { dataService } from "../service/dataService.js";
import { userHelper } from "../utility/userHelper.js";


const myFurnitureCardTemp = (item) => html`
            <div class="col-md-4">
                <div class="card text-white bg-primary">
                    <div class="card-body">
                            <img src="${item.img}" />
                            <p>${item.description}</p>
                            <footer>
                                <p>Price: <span>${item.price} $</span></p>
                            </footer>
                            <div>
                                <a href="#" class="btn btn-info" @click=${() => handleDetailsClick(item._id)}>Details</a>
                            </div>
                    </div>
                </div>
            </div>
`;

const myFurnitureTemp = (item) => html`
        <div class="row space-top">
            <div class="col-md-12">
                <h1>My Furniture</h1>
                <p>This is a list of your publications.</p>
            </div>
        </div>
        <div class="row space-top">
            ${item.map((i) => myFurnitureCardTemp(i))}
        </div>
`;


export async function showMyFurniture(ctx) {
    const userId = userHelper.getUserId();
    const data = await dataService.getMyFurniture(userId);
    ctx.render(myFurnitureTemp(data));
}



