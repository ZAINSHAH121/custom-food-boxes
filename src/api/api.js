// src/api/api.js
import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5000/api", // points to your backend
});

export default API;
