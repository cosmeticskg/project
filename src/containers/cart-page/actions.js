import API from "../../API";
import {changeCARTItemDataInHomePage} from '../home-page/actions';
import {changeCARTItemDataInFavoritePage} from '../favorite-page/actions';
import {changeCARTItemDataInFilterPage} from '../filter-page/actions';

export const PRODUCT_COUNT_TOGGLE = "[CART_PAGE] PRODUCT_COUNT_TOGGLE ";
export const PRODUCT_FINALLY_REMOVED_FROM_CART =
  "[CART_PAGE] PRODUCT_FINALLY_REMOVED_FROM_CART ";
export const SELECT_PRODUCT_TO_BUY = "[CART_PAGE] SELECT_PRODUCT_TO_BUY ";
export const COUNT_TOTAL_VALUE = "[CART_PAGE] COUNT_TOTAL_VALUE ";
export const SHOW_MODAL_ORDER = "[CART_PAGE] SHOW_MODAL_ORDER ";
export const SHOW_MODAL_THANKS = "[CART_PAGE] SHOW_MODAL_THANKS ";
export const SHOW_ALERT_ON_EMPTY_CART = "[CART_PAGE] SHOW_ALERT_ON_EMPTY_CART ";
export const HIDE_MODAL_ORDER = "[CART_PAGE] HIDE_MODAL_ORDER ";
export const TOGGLE_ITEM_VALUE_OF_CART =
  "[CART_PAGE] TOGGLE_ITEM_VALUE_OF_CART ";
export const CHANGE_ITEM_DATA_IN_CART_PAGE =
  "[CART_PAGE] CHANGE_ITEM_DATA_IN_CART_PAGE ";

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

export const changeItemDataInCartPage = data => ({
  type: CHANGE_ITEM_DATA_IN_CART_PAGE,
  payload: data
});

export const toggleItemValueOfCart = data => ({
  type: TOGGLE_ITEM_VALUE_OF_CART,
  payload: data
});

export const registrOrder = data => dispatch => {
  console.log(data);
  API.postData("/purchase/", data);
  dispatch(hideModalOrder());
  dispatch(showModalThanks());
};

export const addProductToCartThunk = data => dispatch => {
  let cartItemsInLocalStorage;
  if (localStorage.getItem("products") === null) {
    cartItemsInLocalStorage = [];
  } else {
    cartItemsInLocalStorage = JSON.parse(localStorage.getItem("products"));
    cartItemsInLocalStorage = cartItemsInLocalStorage.filter(
      productItem => productItem.id !== data.id
    );
  }

  if (data.isCartItem) {
    let oldData = cartItemsInLocalStorage;
    let deleteItem = data.id;
    let beforeDelete = oldData.slice(0, deleteItem);
    let afterDelete = oldData.slice(deleteItem);
    let newData = [...beforeDelete, ...afterDelete];
    cartItemsInLocalStorage = newData;
    localStorage.setItem("products", JSON.stringify(cartItemsInLocalStorage));
  } else {
    cartItemsInLocalStorage.unshift(data);
    localStorage.setItem("products", JSON.stringify(cartItemsInLocalStorage));
  }
  dispatch(toggleItemValueOfCart(data));
  dispatch(changeCARTItemDataInHomePage(data));
  dispatch(changeCARTItemDataInFavoritePage(data));
  dispatch(changeCARTItemDataInFilterPage(data));
};
