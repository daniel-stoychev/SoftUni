import { request } from "../lib/request.js";

const baseUrl = 'http://localhost:3030/data'

export const allItems = () => request('GET', `${baseUrl}/solutions?sortBy=_createdOn%20desc`);

export const getOneItem = (ItemId) => request('GET', `${baseUrl}/solutions/${ItemId}`);

export const createItem = (data) => request('POST', `${baseUrl}/solutions`, data);

export const deleteItem = (id) => request('DELETE', `${baseUrl}/solutions/${id}`);

export const updateItem = (id, data) => request('PUT', `${baseUrl}/solutions/${id}`, data);