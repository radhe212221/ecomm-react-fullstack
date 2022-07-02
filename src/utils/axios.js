import axios from "axios";
const token=localStorage.getItem("token")
const instance = axios.create({
  baseURL: "http://localhost:4000/",
  timeout: 1000,
  headers: { Authorization: `bearer ${token}` },
});


export default instance