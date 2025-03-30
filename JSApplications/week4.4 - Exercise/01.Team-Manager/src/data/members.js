import { get } from "./api.js";

const endpoints = {
    allmembers: '/data/members'
}

export async function getAllMembers() {
    return get(endpoints.allmembers);
}