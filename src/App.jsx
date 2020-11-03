import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';

import Homepage from './pages/homepage/homepage.component';
import Header from "./components/header/header.component";
import Collection from "./pages/collection/collection.component";
import Shop from "./pages/shop/shop.component";
import SignIn from "./pages/sign-in/sign-in.component";

const App = () => (
  <div>
    <Header />
    <Switch>

      <Route path="/shop/:collection" component={Collection} />
      <Route path="/shop" component={Shop}/>
      <Route path="/signIn" component={SignIn}/>
      <Route path="/" component={Homepage} />
    </Switch>
  </div>

);

export default App;

