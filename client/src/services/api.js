import axios from 'axios';

const API_URL = 'http://localhost:5000/api';

// API service for handling user-related requests
export const userService = {
  // Register new user
  register: async (userData) => {
    try {
      const response = await axios.post(`${API_URL}/users/register`, userData);
      return response.data;
    } catch (error) {
      throw error.response.data;
    }
  },

  // Login user
  login: async (credentials) => {
    try {
      const response = await axios.post(`${API_URL}/users/login`, credentials);
      return response.data;
    } catch (error) {
      throw error.response.data;
    }
  },

  // Get user profile
  getProfile: async (userId) => {
    try {
      const response = await axios.get(`${API_URL}/users/profile/${userId}`);
      return response.data;
    } catch (error) {
      throw error.response.data;
    }
  },

  // Update user profile
  updateProfile: async (userId, userData) => {
    try {
      const response = await axios.put(
        `${API_URL}/users/profile/${userId}`,
        userData
      );
      return response.data;
    } catch (error) {
      throw error.response.data;
    }
  },
}; 