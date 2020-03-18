import {
    GET_FOOTER_DATA_SUCCESS,
    GET_FOOTER_DATA_ERROR
  } from "./actions";
  import {} from "./actions";
  
  const initialState = {
    footerData: [],
    error: false
  };
  
  const footerReducer = (state = initialState, action) => {
    switch (action.type) {
      case GET_FOOTER_DATA_SUCCESS:
        return {
          ...state,
          footerData: action.payload
        };

      default:
        return state;
    }
  };
  
  export default footerReducer;
  

