import axios from "axios";
import store from "../stores/store";

export default () =>
  axios.create({
    baseURL: "http://10.0.0.32/api",
    headers: {
      Authorization: `bearer ${store.state.user.token}`
    }
  });
