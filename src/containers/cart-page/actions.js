import API from "../../API";

export const GET_PRODUCT_REQUEST = "[CART_PAGE] GET_PRODUCT_REQUEST";
export const GET_PRODUCT_SUCCESS = "[CART-PAGE] GET_PRODUCT_SUCCESS";
export const GET_PRODUCT_ERROR = "[CART_PAGE] GET_PRODUCT_ERROR";
export const GET_PURCHASED_PRODUCTS_FROM_STORE = '[CART_PAGE] GET_PURCHASED_PRODUCTS_FROM_STORE';

export const getProductsRequest = () => ({ type: GET_PRODUCT_REQUEST });
export const getProductsSuccess = data => ({
  type: GET_PRODUCT_SUCCESS,
  payload: data
});
export const getProductsError = () => ({ type: GET_PRODUCT_ERROR });
export const getPurchasedProductsFromStore = (purchasedProduct) => ({
  type: GET_PURCHASED_PRODUCTS_FROM_STORE,
  payload: purchasedProduct
});

export const getProductsRequestThunk = () => dispatch => {
  dispatch(getProductsRequest());
  return API.getProducts()
    .then(res => {
      // console.log(res.data);
      dispatch(getProductsSuccess(res.data));
    })
    .catch(err => {
      console.log(err, "ERROR FROM GET Products");
      dispatch(getProductsError());
    });
};
