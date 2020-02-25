import React from "react";
import "./app.css";
import Home from "./containers/home-page";
import Cart from "./containers/cart-page/";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import FavoritePage from "./containers/favorite-page/favorite-page";
import NotFound from './components/404';

function App() {
  return (
    <Router>
      <div className="main__wrapper">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/favorite" component={FavoritePage} />
          <Route path="/cart" component={Cart} />
          
          <Route path='*' component={NotFound} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
