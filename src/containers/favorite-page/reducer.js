import {
  PRODUCT_FINALLY_REMOVED_FROM_FAVORITES,
  TOGGLE_ITEM_VALUE_OF_FAVORITE
} from "./actions";
import FUNCS from "../../helpfulFuncs/helpful-functions";

let initialFavorites = JSON.parse(localStorage.getItem("favorites"));
if (initialFavorites === null) {
  localStorage.setItem("favorites", JSON.stringify([]));
}
const initialState = {
  favoriteProducts: initialFavorites || [],
  favoritesCount: initialFavorites.length
};

const favoriteReducer = (state = initialState, action) => {
  let favorites = JSON.parse(localStorage.getItem("favorites"));
  switch (action.type) {
    case PRODUCT_FINALLY_REMOVED_FROM_FAVORITES:
      let newItems = favorites.filter(item => action.payload !== item.id);
      localStorage.setItem("favorites", JSON.stringify(newItems));

      let purchasedProducts = JSON.parse(localStorage.getItem('products'));
      let finalCartProducts = purchasedProducts.map(item => {
        if (item.id === action.payload) {
          item.isFavoriteItem = false;  
        }
        return item;
      });
      localStorage.setItem('products',JSON.stringify(finalCartProducts))

      return {
        ...state,
        favoriteProducts: newItems,
        favoritesCount: newItems.length
      };

    case TOGGLE_ITEM_VALUE_OF_FAVORITE:
      favorites = FUNCS.setFavorite(favorites, action.payload.id);
      localStorage.setItem("favorites", JSON.stringify(favorites));
      
      return {
        ...state,
        favoriteProducts: favorites,
        favoritesCount: favorites.length
      };

    default:
      return state;
  }
};

export default favoriteReducer;
