import page from './lib/page.js';
import navigation from './middleware/navigation.js';
import createView from './views/create.js';
import dashboardView from './views/dashboard.js';
import removeItem from './views/delete.js';
import detailsView, { likeItem } from './views/details.js';
import editView from './views/edit.js';
import homeView from './views/home.js';
import loginView from './views/login.js';
import logoutUser from './views/logout.js';
import registerView from './views/register.js';

page(navigation)

page('/', homeView);
page('/login', loginView);
page('/register', registerView);
page('/logout', logoutUser);
page('/dashboard', dashboardView);
page('/details/:itemId', detailsView);
page('/edit/:itemId', editView);
page('/delete/:itemId', removeItem);
page('/create', createView);
page('/like/:itemId', likeItem);
page();