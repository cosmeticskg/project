import Axios from "axios";

const http = Axios.create({
  baseURL: "https://cors-anywhere.herokuapp.com/http://46.101.192.225:8000",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json"
  }
});

export default {
  getProducts: () => http.get("/product/?limit=6"),
  getRecomendations: () => http.get("/product/recommended/?limit=6"),
  getProduct: id => http.get(`/product/${id}/`),
  getSliderImages: () => http.get(`/slider/?limit=5`),
  getStocks: () => http.get("/product/salebundles/"),
  getHits: () => http.get("/product/hits/?limit=6"),
  getSales: () => http.get("/product/sales/?limit=6"),
  getBrands: () => http.get("/brand/"),
  getCategories: () => http.get("/category/"),
  getSubcategories: () => http.get("/subcategory/"),
  getFooterData: () => http.get("/footer_media/"),
  getProductsForFilter: (category, subCategory, brand, pageSize, currentPage) =>
    http.get(
      `/product/?brand=${brand}&category=${category}&subcategory=${subCategory}&limit=${pageSize}&offset=${currentPage}`
    ),
  postData: (url, data) => http.post(`${url}`, data)
};
