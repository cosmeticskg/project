import API from "../../API";

export const GET_PRODUCT_REQUEST = "[PRODUCT_INFO_PAGE] GET_PRODUCT_REQUEST";
export const GET_PRODUCT_SUCCESS = "[PRODUCT_INFO_PAGE] GET_PRODUCT_SUCCESS";
export const GET_PRODUCT_ERROR = "[PRODUCT_INFO_PAGE] GET_PRODUCT_ERROR";

export const getProductRequest = () => ({
  type: GET_PRODUCT_REQUEST
});

export const getProductSuccess = (data) => ({
    type: GET_PRODUCT_SUCCESS,
    payload: data
})

export const getProductError = () => ({
    type: GET_PRODUCT_ERROR
  });

export const getProductRequestThunk = (productId) => dispatch => {
  dispatch(getProductRequest());
  return API.getProduct(productId)
    .then(res => {
      let product = res.data;
      let newPrice = +product.price;
        newPrice.toFixed();
        product =  {
          ...product,
          is_purchased: false,
          quantity: 1,
          price: newPrice,
          isFavoriteItem: false,
          isCartItem: false
        };
      dispatch(getProductSuccess(product));
    })
    .catch(err => {
      console.log(err, "ERROR FROM GET PRODUCT BY ID");
      dispatch(getProductError());
    });
};
