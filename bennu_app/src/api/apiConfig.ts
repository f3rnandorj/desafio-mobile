import axios from "axios";

export const BASE_URL = "http://192.168.1.65:9001";
export const api = axios.create({
  baseURL: BASE_URL,
});
