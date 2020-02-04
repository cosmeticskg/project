import Axios from "axios";

const http = Axios.create({
  baseURL: "https://cors-anywhere.herokuapp.com/https://eshop-dimash.herokuapp.com"
});

export default {
  getProducts: () => http.get("/product"),
  getProduct: (id) => http.get(`/product/${id}`),
  getHits: () => http.get('/product/hits/' ),
};


