import axios from "axios";

export const login = (data: { username: string; password: string }) => {
  console.log(process.env.REACT_APP_API_ENDPOINT + "auth/login");
  return axios
    .post(process.env.REACT_APP_API_ENDPOINT + "auth/login", data)
    .then((res) => {
      localStorage.setItem("token", res.data.token);
      return 200;
    })
    .catch((err) => err);
};
