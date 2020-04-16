import React from "react";
import ReactDOM from "react-dom";
import App from "./app";
import * as serviceWorker from "./serviceWorker";
import "./index.css";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "./root-reducer";
import thunk from "redux-thunk";

const composeEnhancers =
  window.REDUX_DEVTOOLS_EXTENSION_COMPOSE ?
    window.REDUX_DEVTOOLS_EXTENSION_COMPOSE({
      // options like actionSanitizer, stateSanitizer
    }) : compose;
const enhancer = composeEnhancers(
  applyMiddleware(thunk),
  // other store enhancers if any
);
const store = createStore(rootReducer, enhancer);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
