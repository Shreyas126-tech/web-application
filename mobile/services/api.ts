import axios from 'axios';

// Use local machine IP for development. 
// In production or emulator, you might need 10.0.2.2 (Android emulator) or localhost (iOS simulator)
// Recommend using an environment variable or a constant file for this.
const BASE_URL = process.env.EXPO_PUBLIC_API_URL || 'http://192.168.1.5:8080/api';

const api = axios.create({
    baseURL: BASE_URL,
    headers: {
        'Content-Type': 'application/json',
    },
});

export default api;
