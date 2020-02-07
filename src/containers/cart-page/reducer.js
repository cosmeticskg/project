// import {
//   productAddedToCart,
//   productRemovedFromCart,
//   allProductsRemovedFromCart
// } from './actions';
// import { ADD_PRODUCT } from '../home-page/actions';



// const updateCartItems = (cartItems, item, idx) => {

//   if (item.count === 0) {
//     return [
//       ...cartItems.slice(0, idx),
//       ...cartItems.slice(idx + 1)
//     ];
//   }

//   if (idx === -1) {
//     return [
//       ...cartItems,
//       item
//     ];
//   }

//   return [
//     ...cartItems.slice(0, idx),
//     item,
//     ...cartItems.slice(idx + 1)
//   ];
// };

// const updateCartItem = (product, item = {}, quantity) => {

//   const {
//     id = product.get_id,
//     count = 0,
//     total = 0 } = item;

//   return {
//     id,
//     count: count + quantity,
//     total: total + quantity*product.current_price
//   };
// };

// const updateOrder = (state, productId, quantity) => {
//   const { home: { products }, cart: { cartItems }} = state;

//   const product = products.find(({get_id}) => get_id === productId);
//   const itemIndex = cartItems.findIndex(({get_id}) => get_id === productId);
//   const item = cartItems[itemIndex];

//   const newItem = updateCartItem(product, item, quantity);
//   return {
//     orderTotal: 0,
//     cartItems: updateCartItems(cartItems, newItem, itemIndex)
//   };
// };

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


import {
  PRODUCT_REMOVED_FROM_CART, ALL_PRODUCTS_REMOVED_FROM_CART
} from "./actions";
import { ADD_PRODUCT } from '../home-page/actions';

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
      return {
        ...state,
        purchasedProducts: action.payload
      }
    case PRODUCT_REMOVED_FROM_CART:
      return {
        ...state,
        purchasedProducts: action.payload
      }
    case ALL_PRODUCTS_REMOVED_FROM_CART:
      return {
        ...state,
        purchasedProducts: action.payload
      }

    default:
      return state;
  }
};

export default cartReducer;
