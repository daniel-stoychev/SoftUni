import { request } from "../lib/requester.js";

const baseUrl = 'http://localhost:3030/data';

export const getAllItems = () => request('GET', `${baseUrl}/drones?sortBy=_createdOn%20desc`);

export const getOneItem = (id) => request('GET', `${baseUrl}/drones/${id}`);

export const editItem = (id, data) => request('PUT', `${baseUrl}/drones/${id}`, data);

export const addItem = (data) => request('POST', `${baseUrl}/drones`, data);

export const deleteItemReq = (id) => request('DELETE', `${baseUrl}/drones/${id}`);