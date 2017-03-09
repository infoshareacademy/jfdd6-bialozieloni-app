import React from 'react'
import ReactDOM from 'react-dom'
import {Router, Route, browserHistory} from 'react-router'
import {Provider} from 'react-redux'
import store from './store'

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';

import App from './components/app'
import UsersBudget from './components/users-budget'
import BankForm from './components/bank-form-jr'
import Wig20View from './components/wig20-view'
import ChartView from './components/chart-view'

ReactDOM.render(
  (
    <Provider store={store}>
      <Router history={browserHistory}>
        <Route path="/" component={App}>
          <Route path="users-budget" component={UsersBudget} />
          <Route path="wig-20" component={Wig20View} />
          <Route path="chart" component={ChartView} />
          <Route path="bank-view" component={BankForm} />
      </Route>
    </Router>
      </Provider>
  ),
  document.getElementById('root')
);