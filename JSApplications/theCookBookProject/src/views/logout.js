import homePage from "./home.js";
import initNavigation from "../app.js";

const baseURL = 'http://localhost:3030/users';

export default function logoutPage() {

    fetch(`${baseURL}/logout`)
        .then(response => response.json())
        .then(() => {
            localStorage.clear();
            initNavigation();
            homePage();
        });

}