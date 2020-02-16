import API from "../../API";
export const PRODUCT_COUNT_TOGGLE = "[CART_PAGE] PRODUCT_COUNT_TOGGLE ";
export const PRODUCT_FINALLY_REMOVED_FROM_CART =
  "[CART_PAGE] PRODUCT_FINALLY_REMOVED_FROM_CART ";
export const SELECT_PRODUCT_TO_BUY = "[CART_PAGE] SELECT_PRODUCT_TO_BUY ";
export const CLEAR_TOTAL_VALUE = "[CART_PAGE] CLEAR_TOTAL_VALUE ";
export const SHOW_MODAL_ORDER = "[CART_PAGE] SHOW_MODAL_ORDER ";
export const HIDE_MODAL_ORDER = "[CART_PAGE] HIDE_MODAL_ORDER ";

export const productCountToggle = (productId, value) => ({
  type: PRODUCT_COUNT_TOGGLE,
  payload: productId,
  value
});

export const clearTotalValue = () => ({
  type: CLEAR_TOTAL_VALUE
});

export const showModalOrder = () => ({
  type: SHOW_MODAL_ORDER
});

export const hideModalOrder = () => ({
  type: HIDE_MODAL_ORDER
});

export const productFinallyRemovedFromCart = productId => ({
  type: PRODUCT_FINALLY_REMOVED_FROM_CART,
  payload: productId
});

export const selectProductToBuy = productId => ({
  type: SELECT_PRODUCT_TO_BUY,
  payload: productId
});

export const registrOrder = data => dispatch => {
  console.log(data);
  API.postData("/purchase/", data);
  dispatch(hideModalOrder());
};

// export const removeBasketItemThunk = basketItem => dispatch => {
//   let items = JSON.parse(localStorage.getItem("products"));
//   items.splice(basketItem, 1);
//   localStorage.setItem("products", JSON.stringify(items));
//   dispatch(productFinallyRemovedFromCart(items));
// };
