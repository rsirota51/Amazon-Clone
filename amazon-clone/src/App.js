import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Header from './Header';
import Home from './Home';
import LowerHeader from './LowerHeader';

function App() {
    return (
      <Router>
        <div className="app">
          <Switch>
            <Route path="/checkout">
              <Header/>
              <h1>Checkout</h1>
            </Route>
            <Route path="/login">
              <Header/>
              <h1>Login</h1>
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

