import { createStore, combineReducers, compose, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import persistState from 'redux-localstorage'

import Wig20Reducer from './state/wig20-reducer'
import bankReducer from './state/bank-data-jr'
import budgetReducer from './state/budget'
import formReducer from './state/bank-form-jr'
import sessionReducer from './state/session'
import userReducer from './state/user'



const reducer = combineReducers({
  bankData: bankReducer,
  companies: Wig20Reducer,
  budget: budgetReducer,
  formData : formReducer,
  session: sessionReducer,
  user: userReducer
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  reducer,
  /* preloadedState, */
  composeEnhancers(
    persistState(['session', 'user', 'budget']),
    applyMiddleware(thunk)
  )
);

setInterval(() => {
  const { budget: { totalCapital } } = store.getState()
  store.dispatch({ type: 'bankForm/ACCEPT_NEXT', totalCapital })
}, 2000)

export default store