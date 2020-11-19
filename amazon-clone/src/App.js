import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Header from './Header';
import Home from './Home';
import LowerHeader from './LowerHeader';
import Checkout from './Checkout';

function App() {
    return (
      <Router>
        <div className="app">
          <Header/>
          <LowerHeader/>
          <Switch>
            <Route path="/checkout">
              <Checkout />
            </Route>
            <Route path="/login">
              <h1>Login</h1>
            </Route>
            <Route path="/"> {/*Default Route*/}
              <Home />
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }

export default App;

