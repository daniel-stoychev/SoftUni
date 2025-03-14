import { html } from "../../node_modules/lit-html/lit-html.js";
import { dataService } from "../service/dataService.js";

const detailsTemp = (item) => html`
        <div class="row space-top">
            <div class="col-md-12">
                <h1>Furniture Details</h1>
            </div>
        </div>
        <div class="row space-top">
            <div class="col-md-4">
                <div class="card text-white bg-primary">
                    <div class="card-body">
                        <img src="/${item.img}" />
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
                    

                </div>
            </div>
        </div>
`;

/* <a href=”#” class="btn btn-info">Edit</a>
<a href=”#” class="btn btn-red">Delete</a> */

export async function showDetailsView(ctx) {

    const data = await dataService.getFurnitureDetails(ctx.params.productId);
    ctx.render(detailsTemp(data));
}