import {IP_ADDRESS} from "@env";
import axios from "axios";

export interface MutationOptions<TData> {
  onSuccess?: (data: TData) => void;
  onError?: (message: string) => void;
  errorMessage?: string;
}

// Base URL for the API
// Set to the local machine's IP address to avoid issues when running on emulators or simulators
export const BASE_URL = `http://${IP_ADDRESS}:9001`;
export const api = axios.create({
  baseURL: BASE_URL,
});
