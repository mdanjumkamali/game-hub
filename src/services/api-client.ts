import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "fd714c0a27c3475ea5b435a8e88c6782",
  },
});
