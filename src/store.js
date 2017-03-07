import { createStore, combineReducers } from 'redux'

import Wig20Reducer from './components/wig20-reducer'
import bankReducer from './state/bank-data-jr'
import formReducer from './state/bank-form-jr'


const reducer = combineReducers({
  sample: (state = {}, action = {}) => state,
  bankData: bankReducer,
  formData: formReducer,
  companies: Wig20Reducer
})

const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

export default store