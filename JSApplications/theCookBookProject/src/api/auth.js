const baseURL = 'http://localhost:3030/users';

function login(email, password) {
    return fetch(`${baseURL}/login`, {
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
                throw new Error("Something went wrong");

            }
            localStorage.setItem('accessToken', data.accessToken);
            localStorage.setItem('email', data.email);
            localStorage.setItem('owner', data._id);
        });

}

const auth = {
    login
}

export default auth;