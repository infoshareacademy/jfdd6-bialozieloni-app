import { createStore, combineReducers } from 'redux'

import Wig20Reducer from './components/wig20-reducer'

const reducer = combineReducers({
  sample: (state = {}, action = {}) => state,
  companies: Wig20Reducer
})

const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

export default store