import axios from "axios";

const BASE_URL = "https://dev.chucksales.com";
// const BASE_URL = "https://prod-chucksale.up.railway.app/";

export default axios.create({
  baseURL: BASE_URL,
  headers: { "Content-Type": "application/json" },
});

export const axiosAuth = axios.create({
  baseURL: BASE_URL,
  headers: { "Content-Type": "application/json" },
});
