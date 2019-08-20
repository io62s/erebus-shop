import React from "react";
import { Switch, Route } from "react-router-dom";
import Header from "./header/Header";
import HomePage from "../pages/homepage/HomePage";
import ShopPage from "../pages/shop/ShopPage";
import SignInUp from "../pages/sign-in-up/SignInUp";
import "../App.css";

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/shop" component={ShopPage} />
        <Route exact path="/signin" component={SignInUp} />
      </Switch>
    </div>
  );
}

export default App;
