import { createStore, combineReducers } from 'redux'


const reducer = combineReducers({
  sample: (state = {}, action = {}) => state,
  usersBudget: (state = {investPrice: 0}, action = {}) => state
})

const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

export default store