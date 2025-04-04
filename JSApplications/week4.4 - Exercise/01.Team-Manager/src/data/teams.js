import { get } from "./api.js";

const endpoints = {
    allTeams: '/data/teams',
};

export async function getAllTeams() {

    return get(endpoints.allTeams);
}

export async function getTeamDetails(id) {
    return get(`${endpoints.allTeams}/${id}`);
}

export async function name(params) {

}