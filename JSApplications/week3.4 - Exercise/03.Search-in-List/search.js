import { html, render } from "../node_modules/lit-html/lit-html.js";
import { towns } from "./towns.js"

const townsEl = document.querySelector('#towns');
const searchBtn = document.querySelector('button');
searchBtn.addEventListener('click', search)

function search() {
   // console.log('TEST');
   const searchBoxValue = document.querySelector('#searchText').value.toUpperCase();
   const match = towns.filter(town => town.toUpperCase().includes(searchBoxValue));
   const resultEl = document.querySelector('#result');
   resultEl.textContent = `${match.length} matches found`;
   render(townsTemplate(searchBoxValue), townsEl);
}

function townsTemplate(searchTerm = '') {
   return html`
      <ul>
         ${towns.map(town => {
      const isActive = searchTerm && town.toUpperCase().includes(searchTerm) ? 'active' : '';
      return html`
               <li class="${isActive}">${town}</li>
            `;
   })}
      </ul>
   `;
}
render(townsTemplate(), townsEl)
