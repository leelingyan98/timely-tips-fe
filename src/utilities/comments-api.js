import sendRequest from "./send-request";

const apiUrl = import.meta.env.VITE_API_URL;

const BASE_URL = `${apiUrl}/api/comments`;

export function createComment(commentDetails) {
  return sendRequest(`${BASE_URL}/create`, "POST", commentDetails);
}

export function findAllComments() {
  return sendRequest(`${BASE_URL}/find`);
}

export function findByCommentId(commentId) {
  return sendRequest(`${BASE_URL}/find/id/${commentId}`);
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

export function removeComment(commentId) {
  return sendRequest(`${BASE_URL}/delete/id/${commentId}`, "DELETE");
}
