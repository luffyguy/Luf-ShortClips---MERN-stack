import axios from "axios";

const instance = axios.create({
  baseURL: "https://luff-shortclips.herokuapp.com/",
});

export default instance;