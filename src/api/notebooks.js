import instance from "./base.js";

export const create = (body) => instance.post("/notebooks", body);
export const getAll = () => instance.get("/notebooks");
export const get = (id) => instance.get(`/notebooks/${id}`);
export const update = (id, body) => instance.put(`/notebooks/${id}`, body);
