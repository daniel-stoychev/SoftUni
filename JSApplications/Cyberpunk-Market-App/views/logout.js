import { logout } from "../api/users.js";
import page from "../lib/page.js";
import { removeUserData } from "../utils/userUtils.js";

export default async function logoutView(ctx) {

    try {
        await logout();
        removeUserData();
        page.redirect('/');
    } catch (err) {
        console.error(err.message)
    }


}