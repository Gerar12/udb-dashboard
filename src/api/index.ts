import axios from "axios";

const api = axios.create({
  baseURL: "http://191.101.232.231:8080/api",
  headers: {
    "Content-Type": "application/json",
  },
});

export { api };
