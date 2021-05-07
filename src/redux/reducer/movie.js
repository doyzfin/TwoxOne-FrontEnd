const initialState = {
  data: [],
  post: {},
  isLoading: false,
  isError: false,
  pagination: {},
  msg: "",
};

const movie = (state = initialState, action) => {
  switch (action.type) {
    case "GET_ALL_MOVIE_PENDING":
      return {
        ...state,
        isLoading: true,
        isError: true,
      };
    case "GET_ALL_MOVIE_FULFILLED":
      return {
        ...state,
        isLoading: false,
        isError: false,
        data: action.payload.data.data,
        pagination: action.payload.data.pagination,
        msg: action.payload.data.msg,
      };
    case "GET_ALL_MOVIE_REJECTED":
      return {
        ...state,
        isLoading: false,
        isError: true,
        data: [],
        pagination: {},
        msg: action.payload.response.data.msg,
      };
    case "POST_MOVIE_PENDING":
      return {
        ...state,
        isLoading: true,
        isError: true,
      };
    case "POST_MOVIE_FULFILLED":
      return {
        ...state,
        isLoading: false,
        isError: false,
        // post: action.payload.data.data,
        // msg: action.payload.data.msg,
      };
    case "POST_MOVIE_REJECTED":
      return {
        ...state,
        isLoading: false,
        isError: true,
        // post: {},
        // msg: action.payload.response.data.msg,
      };
    case "DELETE_MOVIE_FULFILLED":
      return {
        ...state,
        isLoading: false,
        isError: false,
        // data: [],
        msg: action.payload.data.msg,
      };
    case "DELETE_MOVIE_REJECTED":
      return {
        ...state,
        isLoading: false,
        isError: true,
        // data: null,
        msg: action.payload.response.data.msg,
      };
    case "UPDATE_MOVIE_PENDING":
      return {
        ...state,
        isLoading: true,
        isError: true,
      };
    case "UPDATE_MOVIE_FULFILLED":
      return {
        ...state,
        isLoading: false,
        isError: false,
        data: [action.payload.data.data],
        msg: action.payload.data.msg,
      };
    case "UPDATE_MOVIE_REJECTED":
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    default:
      return state;
  }
};

export default movie;
