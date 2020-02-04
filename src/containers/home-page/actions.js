import API from "../../API";

export const GET_PRODUCT_REQUEST = "[CART_PAGE] GET_POSTS_REQUEST";
export const GET_PRODUCT_SUCCESS = "[CART-PAGE] GET_POSTS_SUCCESS";
export const GET_PRODUCT_ERROR = "[CART_PAGE] GET_POSTS_ERROR";

export const getProductsRequest = () => ({ type: GET_PRODUCT_REQUEST });
export const getProductsSuccess = data => ({
  type: GET_PRODUCT_SUCCESS,
  payload: data
});
export const getProductsError = () => ({ type: GET_PRODUCT_ERROR });

export const getProductsRequestThunk = () => dispatch => {
  dispatch(getProductsRequest());
  return API.getProducts()
    .then(res => {
      console.log(res, "RESPONSE fROM GET Products");
      dispatch(getProductsSuccess(res.data));
    })
    .catch(err => {
      console.log(err, "ERROR FROM GET Products");
      dispatch(getProductsError());
    });
};
