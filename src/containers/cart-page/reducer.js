import {
  PRODUCT_COUNT_TOGGLE,
  ALL_PRODUCTS_REMOVED_FROM_CART
} from "./actions";

const initialState = {
  purchasedProducts: JSON.parse(localStorage.getItem("products")) || [],
  error: false,
  loading: false,
  count: 0,
  total: 0
};

const IncDecCounter = (id, products, value) => {
  products = products.map(item => {
    if (item.get_id === id) {
        item.quantity += value;
    }
    return item;
  });
};

const cartReducer = (state = initialState, action) => {
  let products = JSON.parse(localStorage.getItem("products"));
  switch (action.type) {
    case PRODUCT_COUNT_TOGGLE:
      IncDecCounter(action.payload, products, action.value);
      localStorage.setItem("products", JSON.stringify(products));
      return {
        ...state,
        purchasedProducts: products
      };

    case ALL_PRODUCTS_REMOVED_FROM_CART:
      let itemId = action.payload;
      let items = JSON.parse(localStorage.getItem("products"));
      items.splice(itemId, 1);
      localStorage.setItem("products", JSON.stringify(items));
      return {
        ...state,
        purchasedProducts: items
      };

    default:
      return state;
  }
};

export default cartReducer;
