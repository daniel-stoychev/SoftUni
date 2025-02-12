import homePage from "./home.js";
import renderNavigation from "../app.js";



const sectionEl = document.querySelector('#register-section');
const registerForm = sectionEl.querySelector('form');
const mainEl = document.querySelector('main');

const baseURL = 'http://localhost:3030/users';

export default function registerPage() {
    mainEl.innerHTML = '';
    sectionEl.style.display = 'block';
    mainEl.appendChild(sectionEl);
    registerForm.addEventListener('submit', (e) => {

        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        // console.log(e.currentTarget);

        fetch(`${baseURL}/register`, {
            method: 'POST',
            body: JSON.stringify({
                email: formData.get('email'),
                password: formData.get('password')
            }),
            headers: {
                'Content-type': 'application/json'
            }
        })
            .then(res => res.json())
            .then(data => {
                if (data.code >= 400) {
                    return alert(data.message);
                }
                console.log(data);

                // console.log(data);
                localStorage.setItem('accessToken', data.accessToken);
                localStorage.setItem('email', data.email);
                localStorage.setItem('owner', data._id);
                mainEl.innerHTML = '';
                renderNavigation();
                homePage();
            })
    });
}

