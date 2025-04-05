import { getOneItem, updateItem } from '../api/items.js';
import { html, render } from '../lib/lit-html.js';
import page from '../lib/page.js';


const template = (onSubmit, itemData) => html`
    <section id="edit">
        <div class="form">
          <img class="border" src="./images/border.png" alt="" />
          <h2>Edit Solution</h2>
          <form @submit=${onSubmit} class="edit-form">
            <input type="text" value=${itemData.type} name="type" id="type" placeholder="Solution Type" />
            <input type="text" value=${itemData.imageUrl} name="image-url" id="image-url" placeholder="Image URL" />
            <textarea id="description" name="description" placeholder="Description" rows="2" cols="10">${itemData.description}</textarea>
            <textarea id="more-info" name="more-info" placeholder="more Info" rows="2" cols="10">${itemData.learnMore}</textarea>
            <button type="submit">Edit</button>
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
            } else if (key == 'more-info') {
                return ['learnMore', value];
            }
            return [key, value];
        })
    );

    if (data.item === '' || data.imageUrl === '' || data.type === '' || data.description === '') {
        return alert("All must be filled");
    }

    try {
        updateItem(this.params.itemId, data);
        page.redirect(`/dashboard/${this.params.itemId}`);

    } catch (err) {
        alert(err.message)
    }

}