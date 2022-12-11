import axios from 'axios';

  /* Conexão com a API */
const api = axios.create({
    baseURL: 'http://localhost:3333'
});

export default api;