import { createStore, combineReducers, compose, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
//import persistState from 'redux-localstorage'

import Wig20Reducer from './state/wig20-reducer'
import bankReducer from './state/bank-data-jr'
import formReducer from './state/bank-form-jr'


const reducer = combineReducers({
  bankData: (state = {}, action = {}) => state,
  usersBudget: (state = {investPrice: 0}, action = {}) => state,
  bankData: bankReducer,
  companies: Wig20Reducer
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