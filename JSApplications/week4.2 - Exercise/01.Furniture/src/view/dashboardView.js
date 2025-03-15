import page from "../../node_modules/page/page.mjs";

import { html } from "../../node_modules/lit-html/lit-html.js";
import { dataService } from "../service/dataService.js";


const cardTemp = (item) => html`
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

const dashboardTemplate = (item) => html`
    <div class="container">
        <div class="row space-top">
            <div class="col-md-12">
                <h1>Welcome to Furniture System</h1>
                <p>Select furniture from the catalog to view details.</p>
            </div>
        </div>
        <div class="row space-top">
            ${item.map((i) => cardTemp(i))}
        </div>
    </div>
`;

export async function showDashboardView(ctx) {
    const data = await dataService.getAllFurniture();
    ctx.render(dashboardTemplate(data));
}

export async function handleDetailsClick(id) {
    await page.redirect(`/product/${id}`);
}