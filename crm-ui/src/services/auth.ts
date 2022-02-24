import axios from "axios";
import { pageRedux } from "../redux";

export const login = async (data: { username: string; password: string }) => {
  return axios.post(process.env.REACT_APP_API_ENDPOINT + "auth/login", data);
};

export const logout = () => {
  localStorage.removeItem("token");
  pageRedux.dispatch({
    type: "CHANGE_USER",
    payload: {
      user: undefined,
    },
  });
  window.location.href = "/login";
};
