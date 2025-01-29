const baseURL = 'http://localhost:3030/users';
const storageItem = localStorage.getItem('email');
const guestView = document.querySelector('#guest');
const userView = document.querySelector('#user');
const loggedInNameEl = document.querySelector('.email span');
const logoutEl = document.querySelector('#logout');

if (storageItem) {
    userView.style.display = 'inline-block';
    guestView.style.display = 'none';
    loggedInNameEl.textContent = localStorage.getItem('email');
} else {
    userView.style.display = 'none';
    guestView.style.display = 'inline-block';
}

logoutEl.addEventListener('click', logout)

function logout() {
    const accessToken = localStorage.getItem('accessToken');
    fetch(`${baseURL}/logout`, {
        method: 'GET',
        headers: {
            'X-Authorization': accessToken
        }
    })
        .then((res) => {
            if (!res.ok) {
                throw new Error('Failed to logout');
            }
            localStorage.removeItem('accessToken');
            localStorage.removeItem('email');
            location.href = 'index.html';
        })


}

