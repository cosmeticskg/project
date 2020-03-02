import Axios from "axios";

const http = Axios.create({
  baseURL: "https://cors-anywhere.herokuapp.com/https://eshop-dimash.herokuapp.com"
});

export default {
  getProducts: () => http.get("/product/?limit=6"),
  getRecomendations: () => http.get("/product/recommended/?limit=6"),
  getProduct: id => http.get(`/product/${id}`),
  getHits: () => http.get("/product/hits/?limit=6"),
  getBrands: () => http.get('/brand/'),
  getCategories: () => http.get('/category/'),
  getSales: () => http.get('/product/sales/?limit=6'),
  postData: (url, data) =>
    http.post(`${url}`, data, {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      }
    })
};
