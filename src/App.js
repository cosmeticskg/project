import React, { Suspense, lazy } from "react";
import "./app.css";
import Home from "./containers/home-page";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ErrorBoundry from "./components/error-boundry";
import Spinner from "./components/spinner/spinner";

const ProductInfoPage = React.lazy(() => import("./containers/product-info"));
const FavoritePage = React.lazy(() => import("./containers/favorite-page/favorite-page"));
const NotFound = React.lazy(() => import("./components/404"));
const FilterPage = React.lazy(() => import("./containers/filter-page"));
const StocksPage = React.lazy(() => import("./containers/stocks-page"));
const Stocks = React.lazy(() => import("./containers/stocks-page/stocks"));
const Cart = React.lazy(() => import("./containers/cart-page"));

function App() {
  return (
    <ErrorBoundry>
      <Router>
        <Suspense fallback={<Spinner />}>
          <div className="main__wrapper">
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/favorite" component={FavoritePage} />
              <Route path="/cart" component={Cart} />
              <Route path="/filters" component={FilterPage} />
              <Route path="/stocks" exact component={Stocks} />
              <Route path="/stocks/:id" component={StocksPage} />
              <Route path="/product/:productId" component={ProductInfoPage} />
              <Route path="*" component={NotFound} />
            </Switch>
          </div>
        </Suspense>
      </Router>
    </ErrorBoundry>
  );
}

export default App;
