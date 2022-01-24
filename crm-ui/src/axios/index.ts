import axios from "axios";

export const defaultAxiosInstance = axios.create({
  timeout: 1000,
});
