import {PRODUCT_FINALLY_REMOVED_FROM_FAVORITES} from "./actions";
  
  const initialState = {
    favoriteProducts: JSON.parse(localStorage.getItem("favorites")) || [],
  };
  
  
  
  const favoriteReducer = (state = initialState, action) => {
    let favorites = JSON.parse(localStorage.getItem("favorites"));    
    switch (action.type) {
      case PRODUCT_FINALLY_REMOVED_FROM_FAVORITES:
      let newItems = favorites.filter(item => action.payload !== item.get_id);
      localStorage.setItem("favorites", JSON.stringify(newItems));
      return {
        ...state,
        favoriteProducts: newItems
      };
  
      default:
        return state;
    }
  };
  
  export default favoriteReducer;
  