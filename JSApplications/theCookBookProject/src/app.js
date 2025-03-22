import homePage from "./views/home.js";
import loginPage from "./views/login.js";
import registerPage from "./views/register.js"
import createPage from "./views/create.js";
import { logoutBtnEl } from "./views/logout.js";


const navElement = document.querySelector('header nav');

const pathnameViews = {
    '/': homePage,
    '/login': loginPage,
    '/register': registerPage,
    '/create': createPage,
    '/logout': logoutBtnEl
};

export default function initNavigation() {

    navElement.addEventListener('click', (e) => {
        if (e.target.tagName !== 'A') {
            return;
        }
        e.preventDefault();
        const url = new URL(e.target.href);
        const pathname = url.pathname;
        console.log(`Navigating to: ${pathname}`);

        if (pathnameViews[pathname]) {
            pathnameViews[pathname](); // Ensure the function exists
        } else {
            console.log(`No view found for: ${pathname}`); // Debugging log
        }

    })

    renderNavigation();
};




function renderNavigation() {
    const email = localStorage.getItem('email');
    const userNavigation = document.getElementById('user');
    const guestNavigation = document.getElementById('guest');

    if (email && email !== 'undefined') {
        guestNavigation.style.display = 'none';
        userNavigation.style.display = 'inline-block';
    } else {
        userNavigation.style.display = 'none';
        guestNavigation.style.display = 'inline-block';
    };

}


initNavigation();
homePage();