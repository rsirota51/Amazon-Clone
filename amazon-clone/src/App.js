import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Header from './Header';
import Home from './Home';
import LowerHeader from './LowerHeader';
import Checkout from './Checkout';
import Login from './Login';
import LoginPassword from './LoginPassword';

function App() {
    return (
      <Router>
        <div className="app">
          <Switch>
            <Route path="/checkout">
              <Header/>
              <LowerHeader/>
              <Checkout />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/loginpassword">
              <LoginPassword />
            </Route>
            <Route path="/"> {/*Default Route*/}
              <Header/>
              <LowerHeader/>
              <Home />
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }

export default App;

