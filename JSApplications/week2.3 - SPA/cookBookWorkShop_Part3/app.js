import homePage from "./views/home.js";

const pathnameViews = {
    '/': homePage,
};

function initNavigation() {
    const navElement = document.querySelector('header nav');
    navElement.addEventListener('click', (e) => {
        if (e.target.tagName !== 'A') {
            return;
        }
        e.preventDefault();
        const url = new URL(e.target.href);
        const pathname = url.pathname;

        pathnameViews[pathname]();



    })


    renderNavigation();
};




function renderNavigation() {
    const email = localStorage.getItem('email');

    if (email && email !== 'undefined') {
        const userNavigation = document.getElementById('user');
        userNavigation.style.display = 'inline-block';
    } else {
        const guestNavigation = document.getElementById('guest');
        guestNavigation.style.display = 'inline-block';
    };
}


initNavigation();