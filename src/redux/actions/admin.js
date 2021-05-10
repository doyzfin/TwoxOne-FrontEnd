import axiosApiIntances from "../../utils/axios";

export const getMovieId = () => {
  return {
    type: "GET_MOVIE_ID",
    payload: axiosApiIntances.get(`movie/`),
  };
};
export const getLocation = () => {
  return {
    type: "GET_LOCATION",
    payload: axiosApiIntances.get("location"),
  };
};
export const getDataDb = () => {
  return {
    type: "GET_DB",
    payload: axiosApiIntances.get("premiere/db"),
  };
};
export const updateDataDb = (id, data) => {
  return {
    type: "UPDATE_DB",
    payload: axiosApiIntances.patch(`premiere/${id}`, data),
  };
};
export const postSchedule = (data) => {
  return {
    type: "POST_SCHEDULE",
    payload: axiosApiIntances.post("premiere/", data),
  };
};
export const deleteSchedule = (id) => {
  return {
    type: "DELETE_SCHEDULE",
    payload: axiosApiIntances.delete(`premiere/${id}`),
  };
};
