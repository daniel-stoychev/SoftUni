import page from "./lib/page.js";
import navigationView from "./middleware/navigation.js";
import { notifications } from "./middleware/notifications.js";
import createView from "./views/create.js";
import dashboardView from "./views/dashboard.js";
import { deleteItem } from "./views/delete.js";
import detailsView from "./views/details.js";
import editView from "./views/edit.js";
import homeView from "./views/home.js";
import loginView from "./views/login.js";
import { logoutFunctionality } from "./views/logout.js";
import registerView from "./views/register.js";

page(navigationView);
page(notifications);

page('/', homeView);
page('/login', loginView);
page('/logout', logoutFunctionality);
page('/register', registerView);
page('/dashboard', dashboardView);
page('/details/:id', detailsView);
page('/create', createView);
page('/edit/:id', editView);
page('/delete/:id', deleteItem);
page();