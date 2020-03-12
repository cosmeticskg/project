import { combineReducers } from "redux";
import cartReducer from "./containers/cart-page/reducer";
import homeReducer from "./containers/home-page/reducer";
import favoriteReducer from "./containers/favorite-page/reducer";
import filterReducer from './containers/filter-page/reducer';
import stocksReducer from './containers/stocks-page/reducer';
import { reducer as formReducer } from "redux-form";

const rootReducer = combineReducers({
  home: homeReducer,
  cart: cartReducer,
  form: formReducer,
  favorite: favoriteReducer,
  filter: filterReducer,
  stocks: stocksReducer
});

export default rootReducer;
