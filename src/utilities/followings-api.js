import sendRequest from "./send-request";

const apiUrl = import.meta.env.VITE_API_URL;

const BASE_URL = `${apiUrl}/api/followings`;

export function createFollowing(followingDetails) {
  return sendRequest(`${BASE_URL}/create`, "POST", followingDetails);
}

export function findAllFollowings() {
  return sendRequest(`${BASE_URL}/find`);
}

export function findByTargetUser(userId) {
  return sendRequest(`${BASE_URL}/find/target/${userId}`);
}

export function findByTargetUsername(username) {
  return sendRequest(`${BASE_URL}/find/target/username/${username}`);
}

export function findByFollowingUser(userId) {
  return sendRequest(`${BASE_URL}/find/following/${userId}`);
}

export function findByFollowingUsername(username) {
  return sendRequest(`${BASE_URL}/find/following/username/${username}`);
}

export function findByUsers(targetUserId) {
  return sendRequest(`${BASE_URL}/find/ids/${targetUserId}/requser`);
}

export function removeFollowing(followingDetails) {
  return sendRequest(`${BASE_URL}/delete`, "DELETE", followingDetails);
}