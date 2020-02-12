import {
  PRODUCT_COUNT_TOGGLE,
  PRODUCT_FINALLY_REMOVED_FROM_CART,
  SELECT_PRODUCT_TO_BUY
} from "./actions";

const initialState = {
  purchasedProducts: JSON.parse(localStorage.getItem("products")) || [],
  error: false,
  loading: false,
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

// onload =() => {
//   products.map (item=>{
//     item.is_purchased = false;
//   })
// }

const cartReducer = (state = initialState, action) => {
  let products = JSON.parse(localStorage.getItem("products"));
  switch (action.type) {
    case PRODUCT_COUNT_TOGGLE:
      IncDecCounter(action.payload, products, action.value);
      let toggledProducts = products.filter(item => item.is_purchased);
      let Total = toggledProducts.reduce((total, item) => {
        if (action.value == 1 && action.payload === item.get_id) {
          total += item.current_price;
        } else if (action.value == -1 && action.payload === item.get_id) {
          total -= item.current_price;
        }
        return total;
      }, state.total);
      localStorage.setItem("products", JSON.stringify(products));
      return {
        ...state,
        purchasedProducts: products,
        total: Total
      };

    case PRODUCT_FINALLY_REMOVED_FROM_CART:
      let itemId = action.payload;
      let removeProducts = products.filter(item => item.is_purchased)
      let removeTotal = removeProducts.reduce((total, item) => {
        if (item.get_id === action.payload) {
          total -= item.current_price * item.quantity;
        }
        return total;
      }, state.total);

      let newItems = products.filter(item => action.payload !== item.get_id)
      // products.splice(itemId, 1);
      // let beforeOldItem = products.slice(0,itemId);
      // let afterOldItem = products.slice(itemId+1);
      // let newProducts = [...beforeOldItem,...afterOldItem];
      // console.log(newProducts);
      
      localStorage.setItem("products", JSON.stringify(newItems));
      return {
        ...state,
        purchasedProducts: newItems,
        total: removeTotal
      };

    case SELECT_PRODUCT_TO_BUY:
      products = products.map(item => {
        if (item.get_id === action.payload) {
          item.is_purchased = !item.is_purchased;
        }
        return item;
      });
      let selectedProducts = products.filter(item => item.is_purchased);
      let selectTotal = selectedProducts.reduce((total, item) => {
        let sum = 0;
        if (item.is_purchased) {
          sum += item.current_price * item.quantity;
        } else {
          sum -= item.current_price * item.quantity;
        }
        total += sum;
        return total;
      }, 0);

      localStorage.setItem("products", JSON.stringify(products));
      return {
        ...state,
        purchasedProducts: products,
        total: selectTotal
      };

    default:
      return state;
  }
};

export default cartReducer;
