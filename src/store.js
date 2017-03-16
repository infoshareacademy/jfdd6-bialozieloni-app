import { createStore, combineReducers, compose, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
//import persistState from 'redux-localstorage'

import Wig20Reducer from './state/wig20-reducer'
import bankReducer from './state/bank-data-jr'
import budgetReducer from './state/budget'
import formReducer from './state/bank-form-jr'


const reducer = combineReducers({
  bankData: bankReducer,
  companies: Wig20Reducer,
  budget: budgetReducer,
  formData : formReducer
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

setInterval(() => {
  store.dispatch({ type: 'bankForm/ACCEPT_NEXT'})
}, 2000)

export default store