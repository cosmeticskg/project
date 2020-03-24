import API from "../../API";
export const PRODUCT_COUNT_TOGGLE = "[CART_PAGE] PRODUCT_COUNT_TOGGLE ";
export const PRODUCT_FINALLY_REMOVED_FROM_CART =
  "[CART_PAGE] PRODUCT_FINALLY_REMOVED_FROM_CART ";
export const SELECT_PRODUCT_TO_BUY = "[CART_PAGE] SELECT_PRODUCT_TO_BUY ";
export const COUNT_TOTAL_VALUE = "[CART_PAGE] COUNT_TOTAL_VALUE ";
export const SHOW_MODAL_ORDER = "[CART_PAGE] SHOW_MODAL_ORDER ";
export const SHOW_MODAL_THANKS = "[CART_PAGE] SHOW_MODAL_THANKS ";
export const SHOW_ALERT_ON_EMPTY_CART = "[CART_PAGE] SHOW_ALERT_ON_EMPTY_CART ";
export const HIDE_MODAL_ORDER = "[CART_PAGE] HIDE_MODAL_ORDER ";

export const productCountToggle = (productId, value) => ({
  type: PRODUCT_COUNT_TOGGLE,
  payload: productId,
  value
});

export const countTotalValue = () => ({
  type: COUNT_TOTAL_VALUE
});

export const showModalOrder = () => ({
  type: SHOW_MODAL_ORDER
});
export const showModalThanks = () => ({
  type: SHOW_MODAL_THANKS
});
export const showAlertOnEmptyCart = () => ({
  type: SHOW_ALERT_ON_EMPTY_CART
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
  dispatch( showModalThanks());
};

export const addProductToCartThunk = data => dispatch => {
  let a;
  if (localStorage.getItem("products") === null) {
    a = [];
  } else {
    a = JSON.parse(localStorage.getItem("products"));
    a = a.filter(productItem => productItem.id !== data.id);
  }
  a.unshift(data);
  localStorage.setItem("products", JSON.stringify(a));
};