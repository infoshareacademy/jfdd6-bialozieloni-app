import { createStore, combineReducers } from 'redux'

import counterReducer from './state/counter'
import studentsReducer from './state/students'
import groupsReducer from './state/groups'

const reducer = combineReducers({
  counter: counterReducer,
  students: studentsReducer,
  groups: groupsReducer
})

const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

export default store
