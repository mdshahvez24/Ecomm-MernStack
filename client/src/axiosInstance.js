import axios from 'axios';

const instance = axios.create({
  baseURL: process.env.REACT_APP_API_URL || "https://ecomm-mernstack-backend.onrender.com",  
});

export default instance;
