import API from "../../API";

// export const GET_PRODUCT_REQUEST = "[CART_PAGE] GET_PRODUCT_REQUEST";
// export const GET_PRODUCT_SUCCESS = "[CART-PAGE] GET_PRODUCT_SUCCESS";
// export const GET_PRODUCT_ERROR = "[CART_PAGE] GET_PRODUCT_ERROR";
// export const GET_PURCHASED_PRODUCTS_FROM_STORE = '[CART_PAGE] GET_PURCHASED_PRODUCTS_FROM_STORE';
export const PRODUCT_COUNT_TOGGLE = "[CART_PAGE] PRODUCT_COUNT_TOGGLE ";
export const ALL_PRODUCTS_REMOVED_FROM_CART = "[CART_PAGE] ALL_PRODUCTS_REMOVED_FROM_CART ";

// export const getProductsRequest = () => ({
//   type: GET_PRODUCT_REQUEST
// });

// export const getProductsSuccess = data => ({
//   type: GET_PRODUCT_SUCCESS,
//   payload: data
// });
// export const getProductsError = () => ({ 
//   type: GET_PRODUCT_ERROR
// });

// export const getPurchasedProductsFromStore = (purchasedProduct) => ({
//   type: GET_PURCHASED_PRODUCTS_FROM_STORE,
//   payload: purchasedProduct
// });

export const productCountToggle = (productId,value) => ({
  type: PRODUCT_COUNT_TOGGLE,
  payload: productId,
  value
});

// export const productRemovedFromCart = (productId,value) => ({
//   type: PRODUCT_ADDED_TO_CART,
//   payload: productId,
//   value
// });

export const allProductsRemovedFromCart = productId => ({
  type: ALL_PRODUCTS_REMOVED_FROM_CART,
  payload: productId
});

export const removeBasketItemThunk = basketItem => dispatch => {
  let items = JSON.parse(localStorage.getItem("products"));
  items.splice(basketItem, 1);
  localStorage.setItem("products", JSON.stringify(items));
  dispatch(allProductsRemovedFromCart(items));
};
// export const plusBasketItemThunk = basketItem => dispatch => {
//   let items = JSON.parse(localStorage.getItem("products"));
//   // console.log(basketItem);
//   console.log(items.key(basketItem));
  
//   items.find(key=>{
//     return key === basketItem;
//   })
//   // console.log(items);
  
//   localStorage.setItem("products", JSON.stringify(items));
//   dispatch(productCountToggle(items));
// };

// export const getProductsRequestThunk = () => dispatch => {
//   dispatch(getProductsRequest());
//   return API.getProducts()
//     .then(res => {
//       // console.log(res.data);
//       dispatch(getProductsSuccess(res.data));
//     })
//     .catch(err => {
//       console.log(err, "ERROR FROM GET Products");
//       dispatch(getProductsError());
//     });
// };
