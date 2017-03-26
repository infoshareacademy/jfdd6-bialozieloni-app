const initialState = {
  transactions: []
}

const formReducer = (state = initialState, action = {}) => {

  switch(action.type) {
    //"sprzedaż" (usuwanie) transakcji z historii transakcji
    case 'bankForm/SELL': {
      let transactionsClone = state.transactions.slice()
      transactionsClone.splice(action.transactionId, 1)
      return {
        ...state,
        transactions: transactionsClone
      }
    }
    //przesyłanie danych z panelu transakcji do historii transakcji
    case 'bankForm/SEND':
      return {
        ...state,
        transactions: [{...action.transaction, isAccepted: false}].concat(state.transactions)
      }
      //symulacja akceptacji transakcji przez bank
    case 'bankForm/ACCEPT_NEXT': {
      const tmp = parseFloat((action.totalCapital - state.transactions.reduce((prev, next) => prev + (next.iloscValue * next.limitValue), 0)).toFixed(2))
      //sprawdzenie czy budżet jest na plusie
      if (tmp < 0) {
        return state
      }
      //wyciągnięcie indeksu pierwszej zaakceptowanej transakcji (akceptuje się automatycznie po interwale w store, jeżeli budżet jest na plusie)
      let indexOfFirstAcceptedTransaction = state.transactions.findIndex(
        transaction => transaction.isAccepted === true
      )
      //zmienna ze stanem transakcji
      let result = state.transactions
      //sprawdzenie czy dokonaliśmy jakichś transakcji
      if (state.transactions.length > 0) {
        //informacja o indeksie najbliższej transakcji do zaakceptowania (nowe transakcje dodają sie na początku tablicy)
        let indexOfTransactionToUpdate = indexOfFirstAcceptedTransaction === -1 ? state.transactions.length - 1 : indexOfFirstAcceptedTransaction - 1

        //transakcje do zaakceptowania
        let okTransactions = state.transactions.slice(0, indexOfTransactionToUpdate)
        //aktualna transakcja do zaakceptowania
        let transactionToAccept = state.transactions[indexOfTransactionToUpdate]
        //zaakceptowane transakcje
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