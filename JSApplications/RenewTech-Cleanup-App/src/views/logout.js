import { logout } from "../api/users.js"
import page from "../lib/page.js";
import { deleteUserData } from "../utils/userUrils.js";

export default function logoutUser() {
    try {
        logout();
        deleteUserData();
        page.redirect('/');
    } catch (err) {
        console.log(err.message);

    }
}
