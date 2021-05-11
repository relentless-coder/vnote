import apiInstance from "./base.js";

export const create = (body) => axios.post("/notebooks", body);
export const getAll = () => axios.get("/notebooks");
export const get = (id) => axios.get(`/notebooks/${id}`);
export const update = (id, body) => axios.put(`/notebooks/${id}`, body);
