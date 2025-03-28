import page from "//unpkg.com/page/page.mjs";

import initNavigation from "./views/navigation.js";
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

initNavigation();