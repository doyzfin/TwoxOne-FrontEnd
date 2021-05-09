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
