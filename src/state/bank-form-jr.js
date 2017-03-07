const initialState = {
  transactions: []
}

const formReducer = (state = initialState, action = {}) => {


  switch(action.type) {
    case 'bankForm/RADIO':
      return {
        ...state,
        radioValue: action.value
      }
    default:
      return state
  }
}

export default formReducer