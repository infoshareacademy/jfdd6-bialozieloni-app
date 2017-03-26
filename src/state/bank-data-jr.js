const initialState = {
    iloscValue: 'wpisz ilość',
    selectValue: 'ALIOR',
    limitValue: 'PKC',
}

const bankReducer = (state = initialState, action = {}) => {

  switch(action.type) {
    case 'bankForm/ILOSC':
      return {
        ...state,
        iloscValue: action.value
      }
    case 'bankForm/SELECT':
      return {
        ...state,
        selectValue: action.value
      }
    case 'bankForm/LIMIT':
      return {
        ...state,
        limitValue: action.value
      }

    default:
      return state
  }
}

export default bankReducer


//reducer


