import axios from "axios";

const client = axios.create({
    withCredentials: true,
    baseURL: "http://localhost:4000/api/users",
});

export const createUserFollows = async (followed) => {
    const response = await client.post(`/${followed}/follow`);
    return response.data;
}

export const unfollowUser = async (followed) => {
    const response = await client.delete(`/${followed}/unfollow`);
    return response.data;
}

export const findFollowersForUser = async (userId) => {
    const response = await client.get(`/${userId}/followers`);
    return response.data;
}

export const findFollowersOfUser = async (userId) => {
    const response = await client.get(`/${userId}/following`);
    return response.data;
}
