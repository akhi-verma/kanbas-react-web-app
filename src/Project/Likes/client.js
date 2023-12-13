import axios from "axios";

const request = axios.create({
    withCredentials: true,
  });

const API_BASE = "https://project-jajx.onrender.com/api";

const USERS_API_URL = `${API_BASE}/users`;
const LIKES_API_URL = `${API_BASE}/likes`;

export const findAllLikes = async () => {
    const response = await request.get(LIKES_API_URL);
    return response.data;
    }
export const createLike = async (userId, movieId, movieTitle) => {
    const response = await request.post(`${USERS_API_URL}/${userId}/likes/${movieId}/${movieTitle}`);
    return response.data;
    }
export const deleteLike = async (userId, movieId) => {
    const response = await request.delete(`${USERS_API_URL}/${userId}/likes/${movieId}`);
    return response.data;
    }
export const findUsersLikeMovies = async (movieId) => {
    const response = await request.get(`${LIKES_API_URL}/${movieId}/users`);
    return response.data;
    }
export const findMoviesLikedByUser = async (userId) => {
    const response = await request.get(`${USERS_API_URL}/${userId}/likes`);
    return response.data;
    }

