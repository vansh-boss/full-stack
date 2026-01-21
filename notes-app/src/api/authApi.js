import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:8120/auth",
  withCredentials: true,
});

export const registerUser = (data) => API.post("/register", data);
export const loginUser = (data) => API.post("/login", data);
export const getMe = () => API.get("/me");
export const logoutUser = () => API.post("/logout");
