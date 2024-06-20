import sendRequest from './send-request';

const apiUrl = import.meta.env.VITE_API_URL;

const BASE_URL = `${apiUrl}/api/users`;

export function signUp(userData) {
  return sendRequest(`${BASE_URL}/create`, 'POST', userData);
}

export function login(credentials) {
  return sendRequest(`${BASE_URL}/login`, 'POST', credentials);
}

export function checkTokenAPI() {
  return sendRequest(`${BASE_URL}/check-token`);
}

export function findAllUsers() {
  return sendRequest(`${BASE_URL}/find`);
}

export function findByUserId(userId) {
  return sendRequest(`${BASE_URL}/find/id/${userId}`);
}

export function findByUsername(username) {
  return sendRequest(`${BASE_URL}/find/username/${username}`);
}

export function findByEmail(userDetails) {
  return sendRequest(`${BASE_URL}/find/email`, "POST", userDetails);
}

export function search(searchTerm) {
  return sendRequest(`${BASE_URL}/search/${searchTerm}`)
}

export function updateUserDetails(userId, userDetails) {
  return sendRequest(`${BASE_URL}/update/${userId}`, "PATCH", userDetails);
}

export function updateUserPicture(userId, userPicture) {
  return sendRequest(`${BASE_URL}/update/picture/${userId}`, "PATCH", userPicture);
}

export function updateUserRemovePicture(userId, userPicture) {
  return sendRequest(`${BASE_URL}/update/picture/remove/${userId}`, "PATCH", userPicture);
}

export function removeUser(userId) {
  return sendRequest(`${BASE_URL}/delete/id/${userId}`, "DELETE");
}
