import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: 'https://7bx7c5q0-8000.inc1.devtunnels.ms'
  });

export default axiosInstance