import axios from "axios";

export const apiUrl = import.meta.env.VITE_API_URL;
export const axiosInstance = axios.create({
    baseURL: apiUrl
})