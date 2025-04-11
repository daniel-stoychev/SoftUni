import { getOneItem, updateItem } from '../api/items.js';
import { html, render } from '../lib/lit-html.js';
import page from '../lib/page.js';


const template = (onSubmit, itemData) => html`
    <section id="edit">
        <div class="form">
          <h2>Edit Retro Game</h2>
          <form @submit=${onSubmit} class="edit-form">
            <input type="text" value=${itemData.name} name="game-name" id="game-name" placeholder="Game Name" />
            <input type="text" value=${itemData.imageUrl} name="image-url" id="image-url" placeholder="Image URL" />
            <input type="text" value=${itemData.platform} name="platform" id="platform" placeholder="Platform" />
            <textarea id="description" name="description" placeholder="Description" rows="2" cols="10">${itemData.description}</textarea>
            <textarea id="release-date" name="release-date" placeholder="Release Date">${itemData.releaseDate}</textarea>
            <button type="submit">Edit Game</button>
          </form>
        </div>
      </section>
`;

export default async function editView(ctx) {
    const itemData = await getOneItem(ctx.params.itemId);
    console.log(itemData);

    render(template(editSubmitHandler.bind(ctx), itemData));
}

async function editSubmitHandler(e) {
    e.preventDefault();
    console.log(this.params.itemId);

    const formData = new FormData(e.target);
    const data = Object.fromEntries(
        Array.from(formData.entries()).map(([key, value]) => {
            if (key == 'image-url') {
                return ['imageUrl', value];
            } else if (key == 'game-name') {
                return ['name', value];
            } else if (key == 'release-date') {
                return ['releaseDate', value];
            }
            return [key, value];
        })
    );

    if (data.item === '' || data.imageUrl === '' || data.type === '' || data.description === '') {
        return window.alert("All must be filled");
    }

    try {
        updateItem(this.params.itemId, data);
        page.redirect(`/details/${this.params.itemId}`);

    } catch (err) {
        window.alert(err.message)
    }

}