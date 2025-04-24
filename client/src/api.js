import axios from "axios";

const API = axios.create({
  baseURL: import.meta.env.VITE_REACT_APP, // Backend URL
  headers: { "Content-Type": "application/json" },
});

// 🔹 Register API
export const registerUser = (userData) => API.post("/api/users/register", userData);

// 🔹 Login API
export const loginUser = (userData) => API.post("/api/users/login", userData);
