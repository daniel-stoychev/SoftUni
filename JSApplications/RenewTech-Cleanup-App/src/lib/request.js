import { getUserData } from "../utils/userUrils.js";

export const request = async (method, url, data) => {

    const { accessToken } = getUserData();

    let requestOptions = {};

    if (data) {
        requestOptions.headers = {
            'Content-type': 'application/json'
        },
            requestOptions.body = JSON.stringify(data);
    }

    if (accessToken) {
        requestOptions.headers = {
            ...requestOptions.headers,
            'X-Authorization': accessToken
        }
    }

    if (method !== 'GET') {
        requestOptions.method = method;
    }


    const response = await fetch(url, requestOptions);

    if (!response.ok) {
        throw response.json();
    }

    if (response.status == 204) {
        return;
    }

    const result = await response.json();

    return result;
}