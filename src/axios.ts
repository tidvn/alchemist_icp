import axios from "axios";

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL, // URL cơ sở của API của bạn
  headers: {
    // 'Authorization': `Bearer ${localStorage.getItem('jwt')}`, // JWT token từ local storage
    "Content-Type": "*/*",
  },
});

export default api;
