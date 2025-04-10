import { getAllItems } from "../api/items.js";
import { render, html } from "../lib/lit-html.js"

const template = (items, hasItems) => html`
    <h3 class="heading">Marketplace</h3>
      <section id="dashboard">
        <!-- Display a div with information about every post (if any)-->
        ${items.map((item) => html`
            <div class="drone">
                <img src="${item.imageUrl}" alt="example1" />
                <h3 class="model">${item.model}</h3>
                <div class="drone-info">
                    <p class="price">Price: €${item.price}</p>
                    <p class="condition">Condition: ${item.condition}</p>
                    <p class="weight">Weight: ${item.weight}g</p>
                </div>
                <a class="details-btn" href="/details/${item._id}">Details</a>
            </div>
        `)}
      </section>
      ${!hasItems ? html`<h3 class="no-drones">No Drones Available</h3>` : ''}`;

export default async function dashboardView(ctx) {

    const items = await getAllItems();

    let hasItems = true;
    if (items.length === 0) {
        hasItems = false;
    }

    render(template(items, hasItems))
}

