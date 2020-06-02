import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: 'http://localhost:5434/api/'
})

export default axiosInstance;