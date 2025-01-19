const loginForm = document.querySelector('main article form');
const baseURL = 'http://localhost:3030/users';

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
            console.log(data);

            if (data.code > 400) {
                return alert(data.message)
            }
            localStorage.setItem('accessToken', data.accessToken);
            localStorage.setItem('email', data.email);
            location.href = 'http://127.0.0.1:5500/week2.1%20-%20Remote%20Data%20&%20Authentications/cookBookWorkShop_Part2/index.html';
        })
        .catch(err => alert(err.message));
});