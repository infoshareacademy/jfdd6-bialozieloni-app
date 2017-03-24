import React from 'react'
import ReactDOM from 'react-dom'
import {Router, IndexRoute, Route, browserHistory} from 'react-router'
import {Provider} from 'react-redux'
import store from './store'

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';

import './main.css'

import App from './components/app'
import BankForm from './components/transaction-panel-form'
import Wig20View from './components/wig20-view'
import ChartView from './components/chart-view'

ReactDOM.render(
  (
    <Provider store={store}>
      <Router history={browserHistory}>
        <Route path="/" component={App}>
          <IndexRoute component={Wig20View} />
          <Route path="transaction-panel" component={BankForm} />
          <Route path="transaction-panel/:name" component={BankForm} />
          <Route path=":companyId" component={ChartView} />
      </Route>
    </Router>
      </Provider>
  ),
  document.getElementById('root')
);