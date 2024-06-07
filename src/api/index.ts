import axios from "axios";
import { getLocalStorageData } from "@/context/login-store";

const { token } = getLocalStorageData();

const api = axios.create({
  baseURL: "http://191.101.232.231:8080/api",
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`,
  },
});

export { api };
