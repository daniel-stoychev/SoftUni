
const rootEl = document.getElementById('root')

const routes = {
    '/index.html': homePage,
    '/pricing': pricingPage,
    '/contacts': contactsPage,
}

//!XSS Warning, demo only
function homePage() {
    rootEl.innerHTML = `
    <h1>HomePage</h1>
    `;
}

function pricingPage() {
    rootEl.innerHTML = `
    <h1>PricingPage</h1>
    `;
}

function contactsPage() {
    rootEl.innerHTML = `
    <h1>ContactsPage</h1>
    `;
}

function navigate(pathname) {
    history.pushState(null, null, pathname)

    //Trigger popState event on pushState
    window.dispatchEvent(new Event('popstate'))
}

function initiNavigation() {

    document.querySelector('.site-navigation').addEventListener('click', (e) => {
        if (e.target.tagName !== 'A') {
            return;
        }
        // STOP default navigation
        e.preventDefault();

        // Add history (API) based navigation
        const url = new URL(e.target.href);
        navigate(url.pathname)

    })

    //Listen for URL change 
    window.addEventListener('popstate', () => {
        // Show content based on current router
        routes[location.pathname]();
    })

    routes[location.pathname]();


}

initiNavigation();

//01:14 hour, from here need to write the demo