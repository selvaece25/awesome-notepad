import axios from 'axios';

// Create axios client, pre-configured with baseURL
let APIKit = axios.create({
  baseURL: 'https://api-nodejs-todolist.herokuapp.com/',
  timeout: 10000,
});

APIKit.defaults.headers.common['Authorization'] = `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MDA4Y2MzZTVhYjQ2ZjAwMTdiOGY2NGUiLCJpYXQiOjE2MjU5ODI3MjB9.l69xME6DRfuVBLjM8veUVH26ZluV9Kq2nSVIDHiyerc`;    


APIKit.interceptors.response.use((response) => {
  return (response.data) ? response.data : response;
}, error => Promise.reject(error.response));


export default APIKit;