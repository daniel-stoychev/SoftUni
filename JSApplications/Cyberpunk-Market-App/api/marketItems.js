import { request } from "../lib/requester.js";

const baseUrl = `http://localhost:3030/data`;

export const listAllItems = () => request('GET', `${baseUrl}/cyberpunk?sortBy=_createdOn%20desc`);

export const getItemDetails = (id) => request('GET', `${baseUrl}/cyberpunk/${id}`);

export const createItem = (createData) => request('POST', `${baseUrl}/cyberpunk`, createData);

export const deleteItem = (id) => request('DELETE', `${baseUrl}/cyberpunk/${id}`);

export const updateItem = (id, editData) => request('PUT', `${baseUrl}/cyberpunk/${id}`, editData);




