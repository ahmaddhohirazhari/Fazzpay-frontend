import axiosClient from "../../utils/axios";

export const login = (data) => {
  return {
    type: "LOGIN",
    payload: axiosClient.post("/auth/login", data),
  };
};
export const logoutRedux = () => {
  return {
    type: "LOGOUT",
    payload: axiosClient.post("/auth/logout"),
  };
};
export const forgotPassword = (data) => {
  return {
    type: "FORGOT_PASSWORD_USER",
    payload: axiosClient.post("auth/forgot-password", data),
  };
};
export const resetPassword = (form) => {
  return {
    type: "RESET_PASSWORD_USER",
    payload: axiosClient.patch(`auth/reset-password`, form),
  };
};
