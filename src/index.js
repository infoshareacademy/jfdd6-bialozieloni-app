import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, browserHistory } from 'react-router'

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';

import App from './components/app'
import UsersView from './components/users-view'
import Wig20View from './components/wig20-view'

ReactDOM.render(
  (
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <Route path="users" component={UsersView} />
        <Route path="wig-20" component={Wig20View} />
      </Route>
    </Router>
  ),
  document.getElementById('root')
);