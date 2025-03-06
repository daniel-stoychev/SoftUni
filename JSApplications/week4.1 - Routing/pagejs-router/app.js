import page from "//unpkg.com/page/page.mjs";


const rootEl = document.getElementById('root')

const routes = {
    '/index.html': homePage,
    '/pricing': pricingPage,
    '/contacts': contactsPage,
}

//!XSS Warning, demo only
function homePage(ctx) {
    rootEl.innerHTML = `
    <h1>HomePage</h1>
    `;
}

function pricingPage(ctx) {

    console.log(ctx);


    rootEl.innerHTML = `
    <h1>PricingPage</h1>
    `;
}

function contactsPage(ctx) {
    rootEl.innerHTML = `
    <h1>ContactsPage</h1>
    `;
}

function catalogPage(ctx) {

    rootEl.innerHTML = `
    <ul>
    <li><a href="/catalog/opel"</a>Opel</li>
    <li><a href="/catalog/bmw"</a>BMW</li>
    <li><a href="/catalog/audi"</a>Audi</li>
    </ul>
    `
}

function catalogItemPage(ctx) {
    rootEl.innerHTML = `
    <h1>${ctx.params.car}</h1>
    <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of</p>
    `

}

page('/index.html', homePage);
page('/pricing', pricingPage);
page('/contacts', contactsPage);
page('/catalog', catalogPage)
page('/catalog/:car', catalogItemPage)
page.start();
