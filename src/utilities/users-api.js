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