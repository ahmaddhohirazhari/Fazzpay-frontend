import axios from "../../utils/axios";

export const register = (data) => {
  return {
    type: "SIGNUP",
    payload: axios.post("/auth/register", data),
  };
};
