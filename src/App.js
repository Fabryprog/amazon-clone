import React, { useEffect } from 'react';
import './App.css';
import Home from "./components/home/Home"
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import Header from "./components/header/Header"
import Checkout from './components/checkout/Checkout';
import Login from './components/login/Login';
import axios from 'axios';

function App() {
  axios.defaults.headers.post['Content-Type'] = 'application/json';

  //console.log("USER IS >>>>>", user)
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/login">
            <Login/>
          </Route>
          <Route path="/checkout">
            <Header/>
            <Checkout/>
          </Route>
          <Route path="/">
            <Header/>
            <Home/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
