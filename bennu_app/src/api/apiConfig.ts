import axios from "axios";

export interface MutationOptions<TData> {
  onSuccess?: (data: TData) => void;
  onError?: (message: string) => void;
  errorMessage?: string;
}

export const BASE_URL = "http://192.168.1.65:9001";
export const api = axios.create({
  baseURL: BASE_URL,
});
