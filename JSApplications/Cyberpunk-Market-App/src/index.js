import page from "../lib/page.js";
import { navigation } from "../middleware/navigation.js";
import { notification } from "../middleware/notifications.js";
import createView from "../views/create.js";
import dashboardView from "../views/dashboard.js";
import removeItem from "../views/delete.js";
import detailsView from "../views/details.js";
import editView from "../views/edit.js";
import homeView from "../views/home.js";
import loginView from "../views/login.js";
import logoutView from "../views/logout.js";
import registerView from "../views/register.js";

page(navigation);
page(notification);

page('/', homeView);
page('/login', loginView);
page('/register', registerView);
page('/logout', logoutView);
page('/logout', logoutView);
page('/market', dashboardView);
page('/item/:id', detailsView);
page('/create', createView);
page('/delete/:id', removeItem);
page('/edit/:id', editView);
page();