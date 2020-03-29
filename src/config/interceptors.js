import axios from 'axios';

export default function setup() {
  axios.interceptors.request.use((config) => {
    const token = localStorage.getItem('todoToken');
    if (token) {
      // eslint-disable-next-line no-param-reassign
      config.headers.Authorization = token;
    }
    return config;
  }, (err) => Promise.reject(err));
}
