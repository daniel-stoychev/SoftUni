import page from "./lib/page.js";
import homeView from "./views/home.js";
import loginView from "./views/login.js";
import registerView from "./views/register.js";
import logoutUser from "./views/logout.js";
import navigation from "./middleware/navigation.js";
import dashboardView from "./views/dashboard.js";
import detailsView, { likeItem } from "./views/details.js";
import createView from "./views/create.js";
import removeItem from "./views/delete.js";
import editView from "./views/edit.js";

page(navigation);

page('/', homeView);
page('/register', registerView);
page('/login', loginView);
page('/logout', logoutUser);
page('/dashboard', dashboardView);
page('/dashboard/:itemId', detailsView);
page('/delete/:itemId', removeItem);
page('/edit/:itemId', editView);
page('/like/:itemId', likeItem);
page('/create', createView);
page();