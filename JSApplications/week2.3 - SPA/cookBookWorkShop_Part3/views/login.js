import homePage from "./home.js";
import renderNavigation from "../app.js";

const sectionEl = document.querySelector('#login-section');
const loginForm = sectionEl.querySelector('form');
const mainEl = document.querySelector('main');


const baseURL = 'http://localhost:3030/users';

export default function loginPage() {
    mainEl.innerHTML = '';
    sectionEl.style.display = 'block';
    // console.log(loginForm);
    mainEl.appendChild(sectionEl);

    loginForm.addEventListener('submit', (e) => {


        e.preventDefault();

        const { email, password } = Object.fromEntries(new FormData(e.currentTarget));

        fetch(`${baseURL}/login`, {
            method: 'POST',
            body: JSON.stringify({
                email,
                password,
            }),
            headers: {
                'Content-type': 'application/json'
            }
        })
            .then((res) => res.json())
            .then((data) => {
                // console.log(data);
                if (data.code > 400) {
                    return alert(data.message)
                }
                localStorage.setItem('accessToken', data.accessToken);
                localStorage.setItem('email', data.email);
                localStorage.setItem('owner', data._id);
                renderNavigation();
                homePage();

            })
            .catch(err => alert(err.message));
    });



}

