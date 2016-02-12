import 'core-js/fn/object/assign'
import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/Main'
import Header from './components/Header'
import Login from './components/Login'
import LoginView from './views/LoginView'
import Signup from './components/Signup'
import WTVideo from './components/WTVideo'
import WTUpload from './components/WTUpload'
import MainLayout from './layouts/MainLayout'
import configureStore from './redux/configureStore'
import { Router, Route, Link, browserHistory, IndexRoute } from 'react-router'
import { Provider } from 'react-redux'
//Render the main component into the dom
import injectTapEventPlugin from 'react-tap-event-plugin'

// Needed for onTouchTap
// Can go away when react 1.0 release
// Check this repo:
// https://github.com/zilverline/react-tap-event-plugin
injectTapEventPlugin();
const store = configureStore({history: browserHistory});

ReactDOM.render(
  <Provider store={store}>
  <Router history={browserHistory}>
    <Route path="/" component={MainLayout}>
      <IndexRoute component={App}/>
      <Route path="signup" component={Signup}/>
      <Route path="login" component={LoginView}/>
      <Route path="video/:id" component={WTVideo}/>
      <Route path="upload" component={WTUpload}/>
    </Route>

  </Router>
  </Provider>
  , document.getElementById('app'));
