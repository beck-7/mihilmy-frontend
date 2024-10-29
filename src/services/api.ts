// Example of base global api

// import axios from "axios";
// import { authStore } from "../stores/AuthStore";

// const api = axios.create({
//   baseURL: "https://api.example.com",
// });

// api.interceptors.request.use(
//   (config) => {
//     if (authStore.accessToken) {
//       config.headers.Authorization = `Bearer ${authStore.accessToken}`;
//     }
//     return config;
//   },
//   (error) => Promise.reject(error)
// );

// api.interceptors.response.use(
//   (response) => response,
//   async (error) => {
//     const originalRequest = error.config;

//     if (error.response.status === 401 && !originalRequest._retry) {
//       originalRequest._retry = true;
//       await authStore.refreshTokens();

//       if (authStore.accessToken) {
//         originalRequest.headers.Authorization = `Bearer ${authStore.accessToken}`;
//         return api(originalRequest);
//       }
//     }

//     return Promise.reject(error);
//   }
// );

// export default api;
