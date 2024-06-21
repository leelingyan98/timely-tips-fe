import sendRequest from "./send-request";

const apiUrl = import.meta.env.VITE_API_URL;

const BASE_URL = `${apiUrl}/api/comments`;

////////////////////////////
//        Create
////////////////////////////

export function createComment(commentDetails) {
  return sendRequest(`${BASE_URL}/create`, "POST", commentDetails);
}

////////////////////////////
//         Find
////////////////////////////

export function findAllComments() {
  return sendRequest(`${BASE_URL}/find`);
}

export function findByPostId(postId) {
  return sendRequest(`${BASE_URL}/find/post/${postId}`);
}

export function findByUserId(userId) {
  return sendRequest(`${BASE_URL}/find/user/${userId}`);
}

////////////////////////////
//        Update
////////////////////////////

export function updateComment(commentId, commentDetails) {
  return sendRequest(`${BASE_URL}/update/${commentId}`, "PATCH", commentDetails);
}

////////////////////////////
//        Delete
////////////////////////////

export function removeComment(commentId) {
  return sendRequest(`${BASE_URL}/delete/id/${commentId}`, "DELETE");
}
