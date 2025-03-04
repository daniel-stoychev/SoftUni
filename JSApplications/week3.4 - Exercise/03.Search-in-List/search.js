import { html, render } from "../node_modules/lit-html/lit-html.js";
import { towns } from "./towns.js"

const townsEl = document.querySelector('#towns');
const searchBtn = document.querySelector('button');
searchBtn.addEventListener('click', search)

function search() {
   // console.log('TEST');
   const searchBoxValue = document.querySelector('#searchText').value;
   const match = towns.filter(town => town.includes(searchBoxValue));
   console.log(match);

   const resultEl = document.querySelector('#result');
   resultEl.textContent = `${match.length} matches found`;
}

function townsTemplate() {
   return html`
      <ul>
         ${towns.map(town =>
      html`
            <li>${town}</li>
            `
   )
      }
      </ul >
   `;
}

render(townsTemplate(), townsEl)
