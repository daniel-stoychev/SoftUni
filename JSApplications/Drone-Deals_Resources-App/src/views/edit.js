import { editItem, getOneItem } from "../api/items.js";
import { render, html } from "../lib/lit-html.js"
import page from "../lib/page.js";

const template = (onEdit, itemData) => html`
    <section id="edit">
        <div class="form form-item">
          <h2>Edit Offer</h2>
          <form @submit=${onEdit} class="edit-form">
            <input type="text" value=${itemData.model} name="model" id="model" placeholder="Drone Model" />
            <input type="text" value=${itemData.imageUrl} name="imageUrl" id="imageUrl" placeholder="Image URL" />
            <input type="number" value=${itemData.price} name="price" id="price" placeholder="Price" />
            <input type="number" value=${itemData.weight} name="weight" id="weight" placeholder="Weight" />
            <input type="number" value=${itemData.phone} name="phone" id="phone" placeholder="Phone Number for Contact" />
            <input type="text" value=${itemData.condition} name="condition" id="condition" placeholder="Condition" />
            <textarea name="description" id="description" placeholder="Description">${itemData.description}</textarea>
            <button type="submit">Edit</button>
          </form>
        </div>
      </section>
`;

export default async function editView(ctx) {

    const itemData = await getOneItem(ctx.params.id);
    render(template(editItemHandler.bind(ctx), itemData))
}

async function editItemHandler(e) {
    e.preventDefault();

    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);

    if (Object.values(data).some(value => value === '')) {
        // return alert('All fields must be filled');
        return this.showNotifications("All fields must be filled")
    }

    try {
        editItem(this.params.id, data);
        page.redirect(`/details/${this.params.id}`)
    } catch (err) {
        return alert(err.message);

    }

}