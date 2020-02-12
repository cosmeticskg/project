import React from "react";
import "./app.css";
import Home from './containers/home-page';
import Cart from './containers/cart-page/';  
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// import { NotFound } from './containers/404'; 
// import Header from './components/header-main';
// import Navbar from './components/navbar';


function App() {
  return (
    <Router>
      <div className="main__wrapper" >
        {/* <Header />
        <Navbar /> */}
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/cart" component={Cart} />
        {/* <Route path='*' component={NotFound} /> */}
      </Switch>
      </div>
    </Router>
  );
}

export default App;
