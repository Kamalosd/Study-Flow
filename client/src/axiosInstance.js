import axios from "axios";

export const userBaseUrl = axios.create({
  baseURL: "http://localhost:9999/user",
});

export const subjectBaseUrl = axios.create({
  baseURL: "http://localhost:9999/subject",
});