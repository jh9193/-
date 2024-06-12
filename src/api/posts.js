// api/posts.js
import api from './api';

export const fetchPosts = async () => {
    const response = await api.get('/posts'); // 여기에 실제 API의 엔드포인트를 입력합니다.
    return response.data;
};
