export function getUserData() {
    const userData = {
        "id": localStorage.getItem("_id"),
        "email": localStorage.getItem("email"),
        "accessToken": localStorage.getItem("accessToken")
    }

    return userData;
}

export function setUserData(userData) {
    localStorage.setItem("_id", userData._id);
    localStorage.setItem("email", userData.email);
    localStorage.setItem("accessToken", userData.accessToken);
}

export function removeUserData() {
    localStorage.clear();
}