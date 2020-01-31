import React from "react";
import "./app.css";
import Home from './containers/home-page';
import Cart from './containers/cart-page/';

function App() {
  return (
    <div className="main__wrapper" >
      {/* <Home /> */}
      <Cart />  
    </div>
  );
}

export default App;
