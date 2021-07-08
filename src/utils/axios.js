import axios from "axios";

const axiosApiIntances = axios.create({
  baseURL: process.env.REACT_APP_BACKEND_URL,
});
// Add a request interceptor
axiosApiIntances.interceptors.request.use(
  function (config) {
    // Do something before request is sent
    // ============
    config.headers = {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    };
    // ============
    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

// Add a request interceptor
axiosApiIntances.interceptors.request.use(
  function (config) {
    // Do something before request is sent
    // ============
    config.headers = {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    };
    // ============
    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

// Add a response interceptor
axiosApiIntances.interceptors.response.use(
  function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response;
  },
  function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    console.log(error.response);
    if (error.response.status === 403) {
      if (error.response.data.msg === "jwt expired") {
        const refreshToken = localStorage.getItem("refreshToken");
        axiosApiIntances
          .post("auth/refresh", { refreshToken })
          .then((res) => {
            localStorage.setItem("token", res.data.data.token);
            window.location.reload();
          })
          .catch((err) => console.log(err));
      } else {
        alert("Please Login !");
        localStorage.clear();
        window.location.href = "/login";
      }
    }
    return Promise.reject(error);
  }
);

export default axiosApiIntances;
