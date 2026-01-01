import axios from "axios";
import { redirect } from "react-router";

export const apiService = axios.create({
    baseURL: "/",
    withCredentials: true,
    headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
    },
})

apiService.interceptors.response.use(
  response => response,
  error => {
    if (error.response?.status === 401) {
      throw redirect("/login")
    }
    return Promise.reject(error)
  }
)
