import apiInstance from './base.js';

export const createPage = body => axios.post('/pages', body)
export const getPages = body => axios.post('/pages')
