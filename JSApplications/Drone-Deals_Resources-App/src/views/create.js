import { addItem } from "../api/items.js";
import { render, html } from "../lib/lit-html.js"
import page from "../lib/page.js";

const template = (onCreate) => html`
    <section id="create">
        <div class="form form-item">
          <h2>Add Drone Offer</h2>
          <form @submit=${onCreate}class="create-form">
            <input type="text" name="model" id="model" placeholder="Drone Model" />
            <input type="text" name="imageUrl" id="imageUrl" placeholder="Image URL" />
            <input type="number" name="price" id="price" placeholder="Price" />
            <input type="number" name="weight" id="weight" placeholder="Weight" />
            <input type="number" name="phone" id="phone" placeholder="Phone Number for Contact" />
            <input type="text" name="condition" id="condition" placeholder="Condition" />
            <textarea name="description" id="description" placeholder="Description"></textarea>
            <button type="submit">Add</button>
          </form>

        </div>
    </section>
`;

export default async function createView(ctx) {
    render(template(createItemHandler.bind(ctx)));
}

async function createItemHandler(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);

    if (Object.values(data).some(value => value === '')) {
        // return alert('All fields are required.')
        return this.showNotifications("All fields must be filled");
    }

    try {
        addItem(data);
        page.redirect('/dashboard')

    } catch (err) {
        return alert(err.message)
    }
}



