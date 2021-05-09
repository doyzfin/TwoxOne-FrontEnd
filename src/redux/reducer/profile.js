const initialState = {
  data: {},
  isLoading: false,
  isError: false,
  msg: "",
};

const user = (state = initialState, action) => {
  switch (action.type) {
    case "GET_DATA_USER_PENDING":
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    case "GET_DATA_USER_FULFILLED":
      return {
        ...state,
        isLoading: false,
        isError: false,
        data: action.payload.data.data,
        msg: action.payload.data.msg,
      };
    case "GET_DATA_USER_REJECTED":
      return {
        ...state,
        isLoading: false,
        isError: true,
        data: {},
        msg: action.payload.response.data.msg,
      };
    case "GET_DATA_USER_ALL_PENDING":
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    case "GET_DATA_USER_ALL_FULFILLED":
      return {
        ...state,
        isLoading: false,
        isError: false,
        data: action.payload.data.data,
        msg: action.payload.data.msg,
      };
    case "GET_DATA_USER_ALL_REJECTED":
      return {
        ...state,
        isLoading: false,
        isError: true,
        data: {},
        msg: action.payload.response.data.msg,
      };
    case "UPDATE_USER_PENDING":
      return {
        ...state,
        isLoading: true,
        isError: true,
      };
    case "UPDATE_USER_FULFILLED":
      return {
        ...state,
        isLoading: false,
        isError: false,
        data: [action.payload.data.data],
        msg: action.payload.data.msg,
      };
    case "UPDATE_USER_REJECTED":
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    case "UPDATE_USER_PASS_PENDING":
      return {
        ...state,
        isLoading: true,
        isError: true,
      };
    case "UPDATE_USER_PASS_FULFILLED":
      return {
        ...state,
        isLoading: false,
        isError: false,
        data: [action.payload.data.data],
        msg: action.payload.data.msg,
      };
    case "UPDATE_USER_PASS_REJECTED":
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    default:
      return state;
  }
};

export default user;
