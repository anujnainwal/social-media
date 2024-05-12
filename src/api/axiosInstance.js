import axios from "axios";

const DEVELOPMENT_URL = "http://localhost:9090/api/v1";
// const PRODUCCTION_URL;

const axiosInstance = axios.create({
  baseURL: DEVELOPMENT_URL,
  timeout: 50000,
});

export default axiosInstance;
