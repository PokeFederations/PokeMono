import axios from 'axios';

const axiosService = axios.create({
  baseURL: 'https://pokeapi.co/api/',
});

export default axiosService;
