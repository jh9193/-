import axios from 'axios';

const api = axios.create({
    baseURL: 'https://example.com/api', // 여기에 실제 API의 base URL을 입력합니다.
    headers: {
        'Content-Type': 'application/json',
    },
});

export default api;