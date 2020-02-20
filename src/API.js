import Axios from "axios";
import axios from "axios";

const http = Axios.create({
  baseURL: "https://cors-anywhere.herokuapp.com/https://eshop-dimash.herokuapp.com"
});

export default {
  getProducts: () => http.get("/product"),
  getProduct: id => http.get(`/product/${id}`),
  getHits: () => http.get("/product/hits/"),
  postData: (url, data) =>
    http.post(`${url}`, data, {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      }
    })
};
