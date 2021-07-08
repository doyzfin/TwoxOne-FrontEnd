const initialState = {
  data: [],
  isLoading: false,
  isError: false,
};

const admin = (state = initialState, action) => {
  switch (action.type) {
    case "GET_MOVIE_ID_PENDING":
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    case "GET_MOVIE_ID_FULFILLED":
      return {
        ...state,
        isLoading: false,
        isError: false,
        data: action.payload.data.data,
      };
    case "GET_MOVIE_ID_REJECTED":
      return {
        ...state,
        data: [],
      };
    case "GET_CHART_PENDING":
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    case "GET_CHART_FULFILLED":
      return {
        ...state,
        isLoading: false,
        isError: false,
        data: action.payload.data.data,
      };
    case "GET_CHART_REJECTED":
      return {
        ...state,
        data: [],
      };
    case "GET_DB_PENDING":
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    case "GET_DB_FULFILLED":
      return {
        ...state,
        isLoading: false,
        isError: false,
        data: action.payload.data.data,
      };
    case "GET_DB_REJECTED":
      return {
        ...state,
        data: [],
      };
    case "UPDATE_DB_PENDING":
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    case "UPDATE_DB_FULFILLED":
      return {
        ...state,
        isLoading: false,
        isError: false,
        data: action.payload.data.data,
      };
    case "UPDATE_DB_REJECTED":
      return {
        ...state,
        data: [],
      };
    case "GET_LOCATION_PENDING":
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    case "GET_LOCATION_FULFILLED":
      return {
        ...state,
        isLoading: false,
        isError: false,
        data: action.payload.data.data,
      };
    case "GET_LOCATION_REJECTED":
      return {
        ...state,
        data: [],
      };
    case "POST_SCHEDULE_PENDING":
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    case "POST_SCHEDULE_FULFILLED":
      return {
        ...state,
        isLoading: false,
        isError: false,
        // data: action.payload.data.data,
      };
    case "POST_SCHEDULE_REJECTED":
      return {
        ...state,
        data: [],
      };
    case "DELETE_SCHEDULE_FULFILLED":
      return {
        ...state,
        isLoading: false,
        isError: false,
        // data: action.payload.data.data,
      };
    case "DELETE_SCHEDULE_REJECTED":
      return {
        ...state,
        data: [],
      };
    default:
      return state;
  }
};
export default admin;
