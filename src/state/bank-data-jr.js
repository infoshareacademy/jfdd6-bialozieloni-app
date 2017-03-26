const initialState = {
    iloscValue: 'wpisz ilość',
    selectValue: 'ALIOR',
    limitValue: 'PKC',
}

const bankReducer = (state = initialState, action = {}) => {

  switch(action.type) {
   //ilość zakupionych akcji
    case 'bankForm/ILOSC':
      return {
        ...state,
        iloscValue: action.value
      }
      //wybór spółki WIG20
    case 'bankForm/SELECT':
      return {
        ...state,
        selectValue: action.value
      }
      //aktualna cena akcji wybranej spółki
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


