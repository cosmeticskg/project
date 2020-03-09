import Axios from "axios";

const http = Axios.create({
  baseURL:
    "https://cors-anywhere.herokuapp.com/https://eshop-dimash.herokuapp.com",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json"
  }
});

export default {
  getProducts: () => http.get("/product/?limit=6"),
  getRecomendations: () => http.get("/product/recommended/?limit=6"),
  getProduct: id => http.get(`/product/${id}`),
  getSliderImages: () => http.get(`/slider/?limit=5`),
  getHits: () => http.get("/product/hits/?limit=6"),
  getSales: () => http.get("/product/sales/?limit=6"),
  getBrands: () => http.get("/brand/"),
  getCategories: () => http.get("/category/"),
  getProductsForFilter: (brand,pageSize, currentPage) =>
    http.get(`/product/?brand=${brand}&limit=${pageSize}&offset=${currentPage}`),
  postData: (url, data) =>
    http.post(`${url}`, data)
};
