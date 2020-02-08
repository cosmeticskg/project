// import {
//   productAddedToCart,
//   productRemovedFromCart,
//   allProductsRemovedFromCart
// } from './actions';
// import { ADD_PRODUCT } from '../home-page/actions';

import {
  PRODUCT_REMOVED_FROM_CART, ALL_PRODUCTS_REMOVED_FROM_CART
} from "./actions";
import { ADD_PRODUCT } from '../home-page/actions';

const updateCartItems = (purchasedProducts, item, idx) => {

  if (item.count === 0) {
    return [
      ...purchasedProducts.slice(0, idx),
      ...purchasedProducts.slice(idx + 1)
    ];
  }

  if (idx === -1) {
    return [
      ...purchasedProducts,
      item
    ];
  }

  return [
    ...purchasedProducts.slice(0, idx),
    item,
    ...purchasedProducts.slice(idx + 1)
  ];
};

const updateCartItem = (product, item = {}, quantity_number) => {

  const {
    id = product.get_id,
    count = 0,
    total = 0 } = item;

  return {
    id,
    quantity: count + quantity_number,
    total: total + quantity_number*product.current_price
  };
};

const updateOrder = (state, productId, quantity) => {
  const { home: { products }, cart: { purchasedProducts }} = state;

  const product = products.find(({get_id}) => get_id === productId);
  const itemIndex = purchasedProducts.findIndex(({get_id}) => get_id === productId);
  const item = purchasedProducts[itemIndex];

  const newItem = updateCartItem(product, item, quantity);
  return {
    total: 0,
    purchasedProducts: updateCartItems(purchasedProducts, newItem, itemIndex)
  };
};

// const cartReducer = (state, action) => {

//   if (state === undefined) {
//     return {
//       cartItems: [],
//       orderTotal: 0
//     }
//   }

//   switch(action.type) {
//     case productAddedToCart:
//       return updateOrder(state, action.payload, 1);

//     case productRemovedFromCart:
//       return updateOrder(state, action.payload, -1);

//     case allProductsRemovedFromCart:
//       const item = state.shoppingCart.cartItems.find(({get_id}) => get_id === action.payload);
//       return updateOrder(state, action.payload, -item.count);

//     default:
//       return state;
//   }
// };

// export default cartReducer;




const initialState = {
  purchasedProducts: JSON.parse(localStorage.getItem("products")) || [],
  error: false,
  loading: false,
  count: 0,
  total: 0
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PRODUCT:
      // return updateOrder(state, action.payload, 1);
      return {
        ...state,
        purchasedProducts: action.payload
      }

    case PRODUCT_REMOVED_FROM_CART:
      // return updateOrder(state, action.payload, -1);

      return {
        ...state,
        purchasedProducts: action.payload
      }

    case ALL_PRODUCTS_REMOVED_FROM_CART:
      // const item = state.cart.cartItems.find(({get_id}) => get_id === action.payload);
      // return updateOrder(state, action.payload, -item.count);
      return {
        ...state,
        purchasedProducts: action.payload
      }

    default:
      return state;
  }
};

export default cartReducer;
