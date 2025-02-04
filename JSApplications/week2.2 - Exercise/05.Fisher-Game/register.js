const baseURL = 'http://localhost:3030/users';
const registerForm = document.querySelector('#register-view form');
const userView = document.querySelector('#user');
userView.style.display = 'none';

registerForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const formData = new FormData(registerForm);
    const email = formData.get('email');
    const password = formData.get('password');
    const rePassword = formData.get('rePass');
    const notificationSectionEl = document.querySelector('.notification');

    if (!email || !password || !rePassword) {
        notificationSectionEl.textContent = 'Email, password or repeat password not provided';
    } else if (password != rePassword) {
        notificationSectionEl.textContent = 'Password and repeat password must be the same';
    } else {
        fetch(`${baseURL}/register`, {
            method: 'POST',
            headers: { 'Content-type': 'application-json' },
            body: JSON.stringify({
                email: email,
                password: password
            })
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);

                if (data.code > 400) {
                    notificationSectionEl.textContent = data.message;
                    registerForm.reset();
                } else {
                    localStorage.setItem('accessToken', data.accessToken);
                    localStorage.setItem('email', data.email);
                    localStorage.setItem('id', data._id);
                    location.href = 'index.html';
                }

            })
            .catch((err) => err.message);
    }



});