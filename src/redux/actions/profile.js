import axiosApiIntances from "../../utils/axios";

export const isClick = () => {
  return {
    type: "CLICK",
  };
};
export const getDataUser = (id) => {
  return {
    type: "GET_DATA_USER",
    payload: axiosApiIntances.get(`user/${id}`),
  };
};
export const getDataUserAll = () => {
  return {
    type: "GET_DATA_USER_ALL",
    payload: axiosApiIntances.get(`user/`),
  };
};
export const updateUser = (id, data) => {
  return {
    type: "UPDATE_USER",
    payload: axiosApiIntances.patch(`user/change/${id}`, data),
  };
};
export const updateUserPass = (id, data) => {
  return {
    type: "UPDATE_USER_PASS",
    payload: axiosApiIntances.patch(`user/change-password/${id}`, data),
  };
};
