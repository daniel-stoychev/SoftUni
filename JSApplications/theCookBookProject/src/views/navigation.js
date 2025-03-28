export default function initNavigation() {

    const email = localStorage.getItem('email');
    const userNavigation = document.getElementById('user');
    const guestNavigation = document.getElementById('guest');

    if (email && email !== 'undefined') {
        guestNavigation.style.display = 'none';
        userNavigation.style.display = 'inline-block';
    } else {
        userNavigation.style.display = 'none';
        guestNavigation.style.display = 'inline-block';
    };
};