import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, browserHistory } from 'react-router'

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';

import App from './components/app'
import UsersBudget from './components/users-budget'

ReactDOM.render(
  (
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <Route path="users-budget" component={UsersBudget} />
      </Route>
    </Router>
  ),
  document.getElementById('root')
);