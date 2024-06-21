import axios from "axios"

const axiosInstance = axios.create()

// Config default headers
// axiosInstance.defaults.headers.common["Accept"] = "application/json"
// axiosInstance.defaults.headers.common["Content-Type"] = "application/json"
axiosInstance.defaults.headers.common["X-Requested-With"] = "XMLHttpRequest"

axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => Promise.reject(
    (error.response && error.response.data) || "Something went wrong",
  ),
)

export default axiosInstance
