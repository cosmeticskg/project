import { combineReducers } from "redux";
import cartReducer from "./containers/cart-page/reducer";
import homeReducer from "./containers/home-page/reducer";
import { reducer as formReducer } from "redux-form";

const rootReducer = combineReducers({
  home: homeReducer,
  cart: cartReducer,
  form: formReducer
});

export default rootReducer;
