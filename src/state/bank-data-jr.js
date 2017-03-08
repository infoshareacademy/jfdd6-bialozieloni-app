const initialState = {
    radioValue: 'Kupno',
    iloscValue: 'wpisz ilość',
    selectValue: 'ALIOR',
    limitValue: 'wpisz limit',
  objectValue: []
}

const bankReducer = (state = initialState, action = {}) => {

  switch(action.type) {
    case 'bankForm/RADIO':
      return {
        ...state,
        radioValue: action.value
      }
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
    case 'bankForm/SEND':
      return {
        ...state,
        objectValue: state.objectValue.concat({
          radioValue: state.radioValue,
          iloscValue: state.iloscValue,
          selectValue: state.selectValue,
          limitValue: state.limitValue
        })
      }
    default:
      return state
  }
}

export default bankReducer


//reducer


