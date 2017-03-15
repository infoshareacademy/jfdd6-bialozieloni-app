const initialState = {
  transactions: []
}

const formReducer = (state = initialState, action = {}) => {

  switch(action.type) {
    case 'bankForm/SEND':
      return {
        ...state,
        transactions: state.transactions.concat({...action.transaction, isAccepted: false})
      }
    case 'bankForm/ACCEPT_NEXT':

      return {
        ...state,
        transactions: state.transactions.map((item, index, array)=> {
          if (index === array.length - 1) {
            for (var i = array.length - 1; i >= 0; i -= 1) {
              return {...item, isAccepted: true}
            }
          }
          return item
        })
      }

    default:
      return state
  }
}

export default formReducer