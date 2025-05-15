import axios from "axios";

export const BASE_URL = "http://localhost:9001";
export const api = axios.create({
  baseURL: BASE_URL,
});
