
const rootEl = document.getElementById('root')


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

const routes = {
    '#home': homePage,
    '#pricing': pricingPage,
    '#contacts': contactsPage,
}

function initiNavigation() {
    window.addEventListener('hashchange', () => {
        // console.log('page changed');
        console.log(location.hash);
        routes[location.hash]();
    })

    if (Object.keys(routes).includes(location.hash)) {
        routes[location.hash]();
    } else {
        routes['#home']();
    }



    //redirecrt
    // location.href = '#contacts'
    //---with timeout----
    // setTimeout(() => {
    //     location.href = '#contacts'
    // }, 3000);
}

initiNavigation();