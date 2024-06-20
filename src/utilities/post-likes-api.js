import sendRequest from "./send-request";

const apiUrl = import.meta.env.VITE_API_URL;

const BASE_URL = `${apiUrl}/api/post-likes`;

export function createLike(postDetails) {
  return sendRequest(`${BASE_URL}/create`, "POST", postDetails);
}

export function findAllLikes() {
  return sendRequest(`${BASE_URL}/find`);
}

export function findByPostIdLoggedUser(postId) {
  return sendRequest(`${BASE_URL}/find/post/${postId}/requser`);
}

export function findByPostId(postId) {
  return sendRequest(`${BASE_URL}/find/post/${postId}`);
}

export function findByUserId(userId) {
  return sendRequest(`${BASE_URL}/find/user/${userId}`);
}

export function findByUsername(username) {
  return sendRequest(`${BASE_URL}/find/username/${username}`);
}

export function removeLike(postDetails) {
  return sendRequest(`${BASE_URL}/delete`, "DELETE", postDetails);
}

