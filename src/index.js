import 'core-js/fn/object/assign';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/Main';
import Header from './components/Header';
import Login from './components/Login';
import Signup from './components/Signup';
import { Router, Route, Link, browserHistory, IndexRoute } from 'react-router'
// Render the main component into the dom
ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={Header}>
      <IndexRoute component={App}></IndexRoute>
      <Route path="signup" component={Signup}/>
      <Route path="login" component={Login}/>
    </Route>

  </Router>
  , document.getElementById('app'));
