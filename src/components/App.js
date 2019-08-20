import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import Header from "./header/Header";
import HomePage from "../pages/homepage/HomePage";
import ShopPage from "../pages/shop/ShopPage";
import SignInUp from "../pages/sign-in-up/SignInUp";
import { auth } from "../firebase/firebase.utils";
import "../App.css";

class App extends Component {
  state = {
    currentUser: null
  };

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({
        currentUser: user
      });
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/shop" component={ShopPage} />
          <Route exact path="/signin" component={SignInUp} />
        </Switch>
      </div>
    );
  }
}

export default App;
