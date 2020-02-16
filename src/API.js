import Axios from "axios";
import axios from "axios";

const http = Axios.create({
  baseURL: "https://eshop-dimash.herokuapp.com"
});

// export function postData(url,data){
//    axios({
//     method: 'post',
//     url: http.post(`${url}`),
//     data:  data,
//     headers: {

//     }
//   })
// }

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
