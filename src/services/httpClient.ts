import axios from 'axios';

const httpClient = axios.create({ baseURL: 'http://192.168.0.240:3000/api' });

export { httpClient };
