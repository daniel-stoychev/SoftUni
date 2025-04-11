import { request } from "../lib/requester.js";

const baseUrl = 'http://localhost:3030/data'

export const allItems = () => request('GET', `${baseUrl}/games?sortBy=_createdOn%20desc`);

export const getOneItem = (ItemId) => request('GET', `${baseUrl}/games/${ItemId}`);

export const createItem = (data) => request('POST', `${baseUrl}/games`, data);

export const deleteItem = (id) => request('DELETE', `${baseUrl}/games/${id}`);

export const updateItem = (id, data) => request('PUT', `${baseUrl}/games/${id}`, data);

export const likeItemRequest = (data) => request('POST', `${baseUrl}/likes`, data);

export const getAllLikes = (gameId) => request('GET', `${baseUrl}/likes?where=gameId%3D%22${gameId}%22&distinct=_ownerId&count`);

export const getLikesForUser = (gameId, userId) => request('GET', `${baseUrl}/likes?where=gameId%3D%22${gameId}%22%20and%20_ownerId%3D%22${userId}%22&count`);