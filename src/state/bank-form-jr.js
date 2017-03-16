const initialState = {
  transactions: []
}

const formReducer = (state = initialState, action = {}) => {

  switch(action.type) {
    case 'bankForm/SEND':
      return {
        ...state,
        transactions: [{...action.transaction, isAccepted: false}].concat(state.transactions)
      }
    case 'bankForm/ACCEPT_NEXT': {
      let indexOfFirstAcceptedTransaction = state.transactions.findIndex(
        transaction => transaction.isAccepted === true
      )

      let result = state.transactions

      if (state.transactions.length > 0) {
        let indexOfTransactionToUpdate = indexOfFirstAcceptedTransaction === -1 ? state.transactions.length - 1 : indexOfFirstAcceptedTransaction - 1


        let okTransactions = state.transactions.slice(0, indexOfTransactionToUpdate)
        let transactionToAccept = state.transactions[indexOfTransactionToUpdate]
        let acceptedTransactions = state.transactions.slice(indexOfTransactionToUpdate + 1)

        result = transactionToAccept !== undefined ? [
          ...okTransactions,
          {
            ...transactionToAccept,
            isAccepted: true
          },
          ...acceptedTransactions
        ] : result
      }

      return {
        ...state,
        transactions: result
      }
    }
    default:
      return state
  }
}

export default formReducer