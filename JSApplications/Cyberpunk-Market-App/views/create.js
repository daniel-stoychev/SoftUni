import { createItem } from "../api/marketItems.js";
import { render, html } from "../lib/lit-html.js";
import page from "../lib/page.js";

const template = (onSubmit) => html`
    <section id="create">
        <div class="form form-item">
          <h2>Share Your item</h2>
          <form @submit=${onSubmit} class="create-form">
            <input type="text" name="item" id="item" placeholder="Item" />
            <input type="text" name="imageUrl" id="item-image" placeholder="Your item Image URL" />
            <input type="text" name="price" id="price" placeholder="Price in Euro" />
            <input type="text" name="availability" id="availability" placeholder="Availability Information" />
            <input type="text" name="type" id="type" placeholder="Item Type" />
            <textarea id="description" name="description" placeholder="More About The Item" rows="10"
              cols="50"></textarea>
            <button type="submit">Add</button>
          </form>
        </div>
    </section>
`;

export default async function createView(ctx) {

    render(template(createSubmitHandler.bind(ctx)))
}

async function createSubmitHandler(e) {
    e.preventDefault();
    const formData = new FormData(e.target);

    const createData = {
        item: formData.get('item'),
        imageUrl: formData.get('imageUrl'),
        price: formData.get('price'),
        availability: formData.get('availability'),
        type: formData.get('type'),
        description: formData.get('description')
    }

    if (createData.item === '' || createData.imageUrl === '' || createData.price === '' || createData.availability === '' || createData.type === '' || createData.description === '') {
        // return alert("All must be filled");
        return this.showNotification('All must be filled');
    }

    try {
        createItem(createData);
        page.redirect('/market');

    } catch (err) {
        alert(err.message)
    }


}
