import { createItem } from '../api/items.js';
import { html, render } from '../lib/lit-html.js';
import page from '../lib/page.js';


const template = (onSubmit) => html`
    <section id="create">
        <div class="form">
          <img class="border" src="./images/border.png" alt="" />
          <h2>Add Solution</h2>
          <form @submit=${onSubmit}class="create-form">
            <input type="text" name="type" id="type" placeholder="Solution Type" />
            <input type="text" name="image-url" id="image-url" placeholder="Image URL" />
            <textarea id="description" name="description" placeholder="Description" rows="2" cols="10"></textarea>
            <textarea id="more-info" name="more-info" placeholder="more Info" rows="2" cols="10"></textarea>
            <button type="submit">Add Solution</button>
          </form>
        </div>
      </section>
`;

export default async function createView(ctx) {

    render(template(createSubmitHandler));
}

async function createSubmitHandler(e) {
    e.preventDefault();

    const formData = new FormData(e.target);
    const data = Object.fromEntries(
        Array.from(formData.entries()).map(([key, value]) => {
            // Transform keys as needed
            if (key === 'image-url') {
                return ['imageUrl', value];
            } else if (key === 'more-info') {
                return ['learnMore', value];
            }
            // Return unchanged for other keys
            return [key, value];
        })
    );
    console.log(data);


    const hasEmptyValues = Object.values(data).some(value => value === '');

    if (hasEmptyValues) {
        return alert('One or more field are empty');
    }

    try {
        createItem(data);
        page.redirect('/dashboard');

    } catch (err) {
        alert(err.message);
    }

}
