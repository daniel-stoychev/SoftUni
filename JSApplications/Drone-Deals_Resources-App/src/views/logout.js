import { logout } from "../api/users.js"
import page from "../lib/page.js";
import { removeUserData } from "../utils/userUtils.js";

export const logoutFunctionality = () => {

    try {
        logout();
        removeUserData();
        page.redirect('/');
    } catch (err) {
        console.log(err.message);

    }

}