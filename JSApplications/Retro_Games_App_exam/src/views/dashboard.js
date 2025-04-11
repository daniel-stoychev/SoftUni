
import { allItems } from '../api/items.js';
import { render, html } from '../lib/lit-html.js';

const template = (data) => html`
   <h2>Games Collection</h2>
   ${data.length > 0 ? html`
    <section id="retro-games">
        ${data.map((item) => html`
                <div class="game">
                    <img src=${item.imageUrl} alt="example2" />
                    <div class="game-info">
                        <h3 class="game-name">${item.name}</h3>
                        <p class="platform">Platform: ${item.platform}</p>
                        <a class="details-btn" href="/details/${item._id}">See More</a>
                    </div>
                </div>
        `)}
                
      </section>`
        : html`<!-- Display an h2 if there are no posts -->
      <h2 id="no-game">No retro games yet, be the first to contribute</h2> `}
      
`;

export default async function dashboardView(ctx) {

    const itemsData = await allItems();
    render(template(itemsData));
}