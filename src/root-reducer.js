import { combineReducers } from "redux";
import cartReducer from "./containers/cart-page/reducer";
import homeReducer from "./containers/home-page/reducer";

const rootReducer = combineReducers({
  home: homeReducer,
  cart: cartReducer
});

export default rootReducer;
