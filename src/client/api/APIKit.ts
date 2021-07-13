import axios from 'axios';

// Create axios client, pre-configured with baseURL
let APIKit = axios.create({
  baseURL: 'http://localhost:5000/api/',
  timeout: 10000,
});

APIKit.interceptors.response.use((response) => {
  return (response.data) ? response.data : response;
}, error => Promise.reject(error.response));


export default APIKit;