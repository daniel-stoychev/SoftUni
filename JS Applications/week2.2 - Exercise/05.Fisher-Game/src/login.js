const baseURL = 'http://localhost:3030/users';
const loginForm = document.querySelector('#login-view form');
const userView = document.querySelector('#user');
userView.style.display = 'none';

loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const formData = new FormData(loginForm);
    const emailData = formData.get('email');
    const passwordData = formData.get('password');
    const notificationSectionEl = document.getElementsByClassName('notification')[0];

    if (!emailData || !passwordData) {
        notificationSectionEl.textContent = 'Email or Password not provided';
    } else {
        notificationSectionEl.textContent = '';
        fetch((`${baseURL}/login`), {
            method: 'POST',
            headers: { 'Content-type': 'application/json' },
            body: JSON.stringify({
                email: emailData,
                password: passwordData
            })

        })
            .then((res) => res.json())
            .then((data) => {
                if (data.code > 400) {
                    notificationSectionEl.textContent = data.message;
                } else {
                    localStorage.setItem('accessToken', data.accessToken);
                    localStorage.setItem('email', data.email);
                    location.href = 'index.html';
                };

            })
            .catch(err => alert(err.message));
    }



});




