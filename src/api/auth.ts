// src/api/http.ts
import axios from 'axios';

const http = axios.create({
  baseURL: import.meta.env.VITE_API_AUTH_URL, 
  headers: {
    'Content-Type': 'application/json',
  },
});

http.interceptors.response.use(
  (response) => response,
  (error) => {
    // Manejo global de errores
    if (error.response) {
      console.error('Error:', error.response.status, error.response.data);
    } else {
      console.error('Error:', error.message);
    }
    return Promise.reject(error);
  }
);

export default http;