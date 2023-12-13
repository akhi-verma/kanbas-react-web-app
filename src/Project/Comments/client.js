import axios from "axios";

const client = axios.create({
    withCredentials: true,
});

const API_BASE = "https://project-jajx.onrender.com/api";

const USERS_API_URL = `${API_BASE}/users`;
const COMMENT_API_URL = `${API_BASE}/movies`;

export const createUserComment = async (userId, movieId, movieTitle, comment, rating) => {
    const response = await client.post(`${COMMENT_API_URL}/${movieId}/${movieTitle}/comments/${userId}/${comment}/${rating}`);
    return response.data;
}

export const findCommentsForMovie = async (movieId) => {
    const response = await client.get(`${COMMENT_API_URL}/${movieId}/comments`);
    return response.data;
}

export const deleteComment = async (userId, commentId) => {
    const response = await client.delete(`${USERS_API_URL}/${userId}/${commentId}`);
    return response.data;
}
