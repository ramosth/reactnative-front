import axios from 'axios';

const api = axios.create({
  baseURL: 'https://back-teste-neki.herokuapp.com/',
});

export default api;
