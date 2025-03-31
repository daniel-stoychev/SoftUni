import page from "page";
import { homeView } from "./views/home.js";
import { addSession } from "./middlewares/session.js";
import { addRender } from "./middlewares/render.js";
import { teamsView } from "./views/teams.js";
import { loginView } from "./views/login.js";
import { initNavigation } from "./views/navigation.js";
import { logoutRedirect } from "./views/logout.js";
import { registerView } from "./views/register.js";

page(initNavigation);
page(addSession());
page(addRender(document.querySelector('main')));
page('/', homeView);
page('/teams', teamsView);
page('/login', loginView);
page('/logout', logoutRedirect);
page('/register', registerView);
page();
