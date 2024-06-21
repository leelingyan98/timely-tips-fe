import sendRequest from "./send-request";
import axios from 'axios';

const apiUrl = import.meta.env.VITE_API_URL;

const BASE_URL = `${apiUrl}/api/posts`;

////////////////////////////
//        Create
////////////////////////////

export async function createPost(postDetails) {
  return await axios.post(`${BASE_URL}/create`, postDetails, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
}

////////////////////////////
//         Find
////////////////////////////

export function findAllPosts() {
  return sendRequest(`${BASE_URL}/find`);
}

export function findByPostId(postId) {
  return sendRequest(`${BASE_URL}/find/id/${postId}`);
}

export function findByPostIdGetUser(postId) {
  return sendRequest(`${BASE_URL}/find/id/${postId}/user`);
}

export function findByUserId(userId) {
  return sendRequest(`${BASE_URL}/find/user/${userId}`);
}

export function findByUsername(username) {
  return sendRequest(`${BASE_URL}/find/username/${username}`);
}

////////////////////////////
//        Bookmarks
////////////////////////////

export function bookmark(postId) {
  return sendRequest(`${BASE_URL}/bookmark/${postId}`, "PATCH");
}

export function removeBookmark(postId) {
  return sendRequest(`${BASE_URL}/bookmark/remove/${postId}`, "PATCH");
}

////////////////////////////
//        Update
////////////////////////////

export function updatePostContent(postId, postDetails) {
  return sendRequest(`${BASE_URL}/update/${postId}/content`, "PATCH", postDetails);
}

export async function updatePostPhoto(postId, postDetails) {
  return await axios.patch(`${BASE_URL}/update/${postId}/photo`, postDetails, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
}

export function removePostPhoto(postId) {
  return sendRequest(`${BASE_URL}/update/${postId}/photo/remove`, "PATCH");
}

////////////////////////////
//        Delete
////////////////////////////

export function removePost(postId) {
  return sendRequest(`${BASE_URL}/delete/id/${postId}`, "DELETE");
}

