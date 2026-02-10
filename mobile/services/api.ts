import axios from 'axios';

// Change this to your local machine's IP address to test on a physical device
const BASE_URL = 'http://10.199.115.254:8080/api';

const api = axios.create({
    baseURL: BASE_URL,
    headers: {
        'Content-Type': 'application/json',
    },
});

export default api;
