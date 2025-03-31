import { logout } from "../data/users.js";

export function logoutRedirect(ctx) {
    logout();
    ctx.page.redirect('/');
}