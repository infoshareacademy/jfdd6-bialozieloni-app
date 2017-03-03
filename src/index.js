import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, browserHistory } from 'react-router'
import { Provider } from 'react-redux'
import store from './store'

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';

import App from './components/app'
import UsersView from './components/users-view'
import BankForm from './components/bank-form-jr'


ReactDOM.render(
  (
    <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <Route path="users" component={UsersView} />
        <Route path="bank-form" component={BankForm} />
      </Route>
    </Router>
      </Provider>
  ),
  document.getElementById('root')
);