import { getItemDetails, updateItem } from "../api/marketItems.js";
import { render, html } from "../lib/lit-html.js";
import page from "../lib/page.js";

const template = (onSubmit, itemData) => html`
    <section id="edit">
        <div class="form form-item">
          <h2>Edit Your Item</h2>
          <form @submit=${onSubmit} class="edit-form">
            <input type="text" value=${itemData.item} name="item" id="item" placeholder="Item" />
            <input type="text" value=${itemData.imageUrl} name="imageUrl" id="item-image" placeholder="Your item Image URL" />
            <input type="text" value=${itemData.price} name="price" id="price" placeholder="Price in Euro" />
            <input type="text" value=${itemData.availability} name="availability" id="availability" placeholder="Availability Information" />
            <input type="text" value=${itemData.type} name="type" id="type" placeholder="Item Type" />
            <textarea id="description" name="description" placeholder="More About The Item" rows="10"
              cols="50">${itemData.description}</textarea>
            <button type="submit">Edit</button>
          </form>
        </div>
    </section>
`;

export default async function editView(ctx) {
    const itemData = await getItemDetails(ctx.params.id);
    console.log(itemData);

    render(template(editSubmitHandler.bind(ctx), itemData))
}

async function editSubmitHandler(e) {
    e.preventDefault();

    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);

    if (data.item === '' || data.imageUrl === '' || data.price === '' || data.availability === '' || data.type === '' || data.description === '') {
        // return alert("All must be filled");
        return this.showNotification('All must be filled');
    }

    try {
        updateItem(this.params.id, data);
        page.redirect(`/item/${this.params.id}`);

    } catch (err) {
        alert(err.message)
    }

}