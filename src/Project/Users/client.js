import axios from "axios";

const request = axios.create({
  withCredentials: true,
});

const API_BASE = process.env.REACT_APP_API_BASE_URL;
const USERS_API_URL = `${API_BASE}/api/users`;

export const account = async () => {
  const response = await request.post(`${USERS_API_URL}/account`);
  return response.data;
};

export const signin = async (credentials) => {
  const response = await request.post(`${USERS_API_URL}/signin`, credentials);
  return response.data;
};

export const signout = async (credentials) => {
  const response = await request.post(`${USERS_API_URL}/signout`);
  return response.data;
};

export const findAllUsers = async () => {
  const response = await request.get(USERS_API_URL);
  return response.data;
};

export const findUserById = async (id) => {
  const response = await request.get(`${USERS_API_URL}/${id}`);
  return response.data;
};

export const updateUser = async (id, user) => {
  const response = await request.put(`${USERS_API_URL}/${id}`, user);
  return response.data;
};

export const updateUserByAdmin = async (id, user) => {
  const response = await request.put(`${USERS_API_URL}/admin/${id}`, user);
  return response.data;
};

export const deleteUser = async (id) => {
  const response = await request.delete(`${USERS_API_URL}/${id}`);
  return response.data;
};

export const signup = async (credentials) => {
  const response = await request.post(`${USERS_API_URL}/signup`, credentials);
  return response.data;
}

export const createUsers = async (user) => {
  const response = await request.post(`${USERS_API_URL}/signup`, user);
  return response.data;
}
