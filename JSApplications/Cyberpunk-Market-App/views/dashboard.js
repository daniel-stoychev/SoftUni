import { listAllItems } from "../api/marketItems.js";
import { render, html } from "../lib/lit-html.js";

const template = (allItems) => html`
<h3 class="heading">Market</h3>
    ${allItems.length > 0
        ? html`
        <section id="dashboard">        
        ${allItems.map((item) => html`
            <div class="item">
                <img src=${item.imageUrl} alt="example1" />
                <h3 class="model">${item.item}</h3>
                    <div class="item-info">
                        <p class="price">Price: €${item.price}</p>
                        <p class="availability">
                        ${item.availability}
                        </p>
                        <p class="type">Type: ${item.type}</p>
                    </div>
                <a class="details-btn" href="/item/${item._id}">Uncover More</a>
            </div>
            `)}
        
      </section>`
        : html`<h3 class="empty">No Items Yet</h3>`}`;

export default async function dashboardView(ctx) {

    const allItems = await listAllItems();

    render(template(allItems))
}