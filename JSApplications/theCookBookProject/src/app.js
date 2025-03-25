import page from "//unpkg.com/page/page.mjs";

import homePage from "./views/home.js";
import loginPage from "./views/login.js";
import registerPage from "./views/register.js"
import createRecipePage from "./views/create.js";
import logoutPage from "./views/logout.js";

page('/', homePage);
page('/login', loginPage);
page('/register', registerPage);
page('/create', createRecipePage);
page('/logout', logoutPage);
page();

export default function initNavigation() {

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
};

initNavigation();