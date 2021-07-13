import axios from 'axios';

//const baseUrl = `${process.env.REACT_APP_API_URL}`;
const baseUrl = 'http://localhost:5000/api/';

let APIKit = axios.create({
  baseURL: baseUrl,
  timeout: 10000,
});

APIKit.interceptors.response.use((response) => {
  return (response.data) ? response.data : response;
}, error => Promise.reject(error.response));


export default APIKit;