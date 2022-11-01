import axios from "../../utils/axios";

export const getDataUserById = (id) => {
  return {
    type: "GET_DATA_USER_BY_ID",
    payload: axios.get(`/user/profile/${id}`),
  };
};

export const updateDataUser = (userId, data) => {
  return {
    type: "UPDATE_DATA_USER",
    payload: axios.patch(`user/${userId}`, data),
  };
};

export const updateUserImage = (userId, data) => {
  return {
    type: "UPDATE_IMAGE_USER",
    payload: axios.patch(`user/image/${userId}`, data),
  };
};

export const getDataDashboard = (userId) => {
  return {
    type: "GET_DATA_DASHBOARD_BY_ID",
    payload: axios.get(`/dashboard/${userId}`),
  };
};

export const checkPin = (pin) => {
  return {
    type: "CHECK_PIN",
    data: axios.get(`/user/pin/${pin}`),
  };
};
