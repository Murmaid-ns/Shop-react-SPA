import React from 'react';
import './App.css';
import {Route, Switch} from 'react-router-dom';

import Homepage from './pages/homepage/homepage.component';
import Header from "./components/header/header.component";
import Collection from "./pages/collection/collection.component";
import Shop from "./pages/shop/shop.component";
import SignIn from "./pages/sign-in/sign-in.component";
import CheckoutItem from "./components/checkout/checkout.component";

const App = () => (
  <div>
    <Header/>
    <Switch>
      <Route path="/checkout" component={CheckoutItem}/>
      <Route path="/signIn" component={SignIn}/>
      <Route path="/shop/:collection" component={Collection}/>
      <Route path="/shop" component={Shop}/>
      <Route path="/" component={Homepage}/>
    </Switch>
  </div>

);

export default App;

