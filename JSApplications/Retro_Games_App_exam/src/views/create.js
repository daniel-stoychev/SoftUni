import { createItem } from '../api/items.js';
import { html, render } from '../lib/lit-html.js';
import page from '../lib/page.js';


const template = (onSubmit) => html`
    <section id="create">
        <div class="form">
          <h2>Add Retro Game</h2>
          <form @submit=${onSubmit}class="create-form">
            <input type="text" name="game-name" id="game-name" placeholder="Game Name" />
            <input type="text" name="image-url" id="image-url" placeholder="Image URL" />
            <input type="text" name="platform" id="platform" placeholder="Platform" />
            <textarea id="description" name="description" placeholder="Description" rows="2" cols="10"></textarea>
            <textarea id="release-date" name="release-date" placeholder="Release Date"></textarea>
            <button type="submit">Add Game</button>
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


    const hasEmptyValues = Object.values(data).some(value => value === '');

    if (hasEmptyValues) {
        return window.alert('One or more field are empty');
    }

    try {
        createItem(data);
        page.redirect('/dashboard');

    } catch (err) {
        window.alert(err.message);
    }

}
