const initialState = {
  transactions: []
}

const formReducer = (state = initialState, action = {}) => {

  switch(action.type) {
    case 'bankForm/SEND':
      return {
        ...state,
        transactions: state.transactions.concat(action.transaction)
      }
    default:
      return state
  }
}

export default formReducer