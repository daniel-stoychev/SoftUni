import { allItems } from '../api/items.js';
import { html, render } from '../lib/lit-html.js';


const template = (data) => html`
   <h2>Solutions</h2>
   ${data.length > 0 ? html`
    <section id="solutions">
        ${data.map((item) => html`
            <!-- Display a div with information about every post (if any)-->
                <div class="solution">
                    <img src=${item.imageUrl} alt="example1" />
                    <div class="solution-info">
                        <h3 class="type">${item.type}</h3>
                        <p class="description">
                        ${item.description}
                        </p>
                        <a class="details-btn" href="/dashboard/${item._id}">Learn More</a>
                    </div>
                </div>
        `)}
                
      </section>`
        : html`<!-- Display an h2 if there are no posts -->
      <h2 id="no-solution">No Solutions Added.</h2> `}
      
`;

export default async function dashboardView(ctx) {

    const itemsData = await allItems();

    render(template(itemsData));
}