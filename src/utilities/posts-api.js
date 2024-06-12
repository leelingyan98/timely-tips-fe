import sendRequest from "./send-request";

const apiUrl = import.meta.env.VITE_API_URL;

const BASE_URL = `${apiUrl}/api/posts`;

export function createPost(postDetails) {
  return sendRequest(`${BASE_URL}/create`, "POST", postDetails);
}

export function findAllPosts() {
  return sendRequest(`${BASE_URL}/find`);
}

export function findByPostId(postId) {
  return sendRequest(`${BASE_URL}/find/id/${postId}`);
}

export function findByUserId(userId) {
  return sendRequest(`${BASE_URL}/find/user/${userId}`);
}

export function findByUsername(username) {
  return sendRequest(`${BASE_URL}/find/username/${username}`);
}

export function removePost(postId) {
  return sendRequest(`${BASE_URL}/delete/id/${postId}`, "DELETE");
}

