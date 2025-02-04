const registerForm = document.querySelector('main article form');
const baseURL = 'http://localhost:3030/users';

registerForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    console.log(e.currentTarget);

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
            console.log(data);
            localStorage.setItem('accessToken', data.accessToken);
            localStorage.setItem('email', data.email);
            location.href = 'http://127.0.0.1:5500/week2.1%20-%20Remote%20Data%20&%20Authentications/cookBookWorkShop_Part2/index.html';
        })
});