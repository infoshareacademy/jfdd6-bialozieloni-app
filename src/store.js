import { createStore, combineReducers } from 'redux'

import bankReducer from './state/bank-data-jr'
const reducer = combineReducers({
  sample: (state = {}, action = {}) => state,
  bankData: (state = {}, action = {}) => state,
})

const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

export default store