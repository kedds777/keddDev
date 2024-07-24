// src/AuthService.js
import axios from 'axios';

const API_URL = 'http://localhost:8080';

const register = (username, password) => {
  return axios.post(`${API_URL}/register`, { username, password });
};

const login = (username, password) => {
  return axios.post(`${API_URL}/login`, { username, password })
    .then(response => {
      if (response.data.token) {
        localStorage.setItem('user', JSON.stringify(response.data));
      }
      return response.data;
    });
};

const logout = () => {
  localStorage.removeItem('user');
  console.log(`${API_URL}`);
  return axios.get(`/logout`);
};

const getCurrentUser = () => {
  let currentUser = JSON.parse(localStorage.getItem('user'));
  return currentUser;
};

export default {
  register,
  login,
  logout,
  getCurrentUser,
};
