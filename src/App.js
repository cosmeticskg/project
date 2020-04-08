import React from "react";
import "./app.css";
import Home from "./containers/home-page";
import Cart from "./containers/cart-page";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import FavoritePage from "./containers/favorite-page/favorite-page";
import NotFound from './components/404';
import FilterPage from './containers/filter-page';
import StocksPage from "./containers/stocks-page";
import Stocks from "./containers/stocks-page/stocks";
import ProductInfoPage from './containers/product-info'

function App() {
  return (
    <Router>
      <div className="main__wrapper">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/favorite" component={FavoritePage} />
          <Route path="/cart" component={Cart} />
          <Route path="/filters" component={FilterPage} />
          <Route path="/stocks" exact component={Stocks} />
          <Route path="/stocks/:id" component={StocksPage} />
          <Route path="/product/:productId" component={ProductInfoPage} />
          <Route path='*' component={NotFound} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
