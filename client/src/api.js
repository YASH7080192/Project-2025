import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:3000", // Backend URL
  headers: { "Content-Type": "application/json" },
});

// 🔹 Register API
export const registerUser = (userData) => API.post("/api/users/register", userData);

// 🔹 Login API
export const loginUser = (userData) => API.post("/api/users/login", userData);
