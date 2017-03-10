import { createStore, combineReducers, compose, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
//import persistState from 'redux-localstorage'

import Wig20Reducer from './state/wig20-reducer'
import bankReducer from './state/bank-data-jr'
import budgetReducer from './state/budget'

const reducer = combineReducers({

  companies: Wig20Reducer,
  budget: budgetReducer

})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  reducer,
  /* preloadedState, */
  composeEnhancers(
    //persistState(['counter']),
    applyMiddleware(thunk)
  )
);

export default store