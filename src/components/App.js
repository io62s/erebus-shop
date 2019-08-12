import React from "react";
import { Switch, Route } from "react-router-dom";
import HomePage from "../pages/homepage/HomePage";
import ShopPage from "../pages/shop/ShopPage";
import "../App.css";

function App() {
  return (
    <div>
      <Switch>
        <Route
          exact
          path="/"
          render={routeProps => <HomePage {...routeProps} />}
        />
        <Route
          exact
          path="/shop"
          render={routeProps => <ShopPage {...routeProps} />}
        />
      </Switch>
    </div>
  );
}

export default App;
