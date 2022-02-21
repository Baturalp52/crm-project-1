import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://localhost:3000/api/v1/",
  timeout: 1000,
  headers: {
    "Content-Type": "application/json",
    Authorization: `Token ${localStorage.getItem("token")}`,
  },
});

axiosInstance.interceptors.request.use(
  (config: any) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers["Authorization"] = "Token " + token;
    } else {
      window.location.href = "/login";
    }
    return config;
  },
  (error) => {
    Promise.reject(error);
  }
);

export default axiosInstance;
