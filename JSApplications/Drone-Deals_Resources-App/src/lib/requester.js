import { getUserData } from "../utils/userUtils.js";

export const request = async (method, url, data) => {

    const { accessToken } = getUserData();

    let requestOptions = {};

    if (data) {
        requestOptions.headers = {
            'Content-Type': 'application/json'
        },
            requestOptions.body = JSON.stringify(data)
    }

    if (method !== 'GET') {
        requestOptions.method = method;
    }

    if (accessToken) {
        requestOptions.headers = {
            ...requestOptions.headers,
            'X-Authorization': accessToken
        }
    }

    let response = await fetch(url, requestOptions);

    if (!response.ok) {
        throw response.json();
    }

    if (response == 204) {
        return;
    }

    const result = await response.json();

    return result;

}
