import { del, get } from "./api.js";

const endpoints = {
    allmembers: '/data/members'
}

export async function getAllMembers() {
    return get(endpoints.allmembers);
}

export async function getTeamMemberships(id) {
    return get(`${endpoints.allmembers}?where=teamId%3D%22${id}%22&load=user%3D_ownerId%3Ausers`);
}

// export async function teamLeave(id) {
//     return del(`${endpoints.allmembers}/${id}`);
// }