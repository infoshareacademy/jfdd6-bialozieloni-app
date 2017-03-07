const initialState = {
  radioValue: 'Kupno',
  iloscValue: 'wpisz ilość',
  selectValue: 'ALIOR',
  limitValue: 'wpisz limit'
}

const bankReducer = (state = initialState, action = {}) => {


  switch(action.type) {
    case 'bankForm/RADIO':
      return {
        ...state,
        objectValue: Object.assign( {}, ...state.objectValue, {radioValue: action.value} )
      }
    case 'bankForm/ILOSC':
      return {
        ...state,
        objectValue: Object.assign( {}, ...state.objectValue, {iloscValue: action.value} )
      }
    case 'bankForm/SELECT':
      return {
        ...state,
        objectValue: Object.assign( {}, ...state.objectValue, {selectValue: action.value} )
      }
    case 'bankForm/LIMIT':
      return {
        ...state,
        objectValue: Object.assign( {}, ...state.objectValue, {limitValue: action.value} )
      }
    case 'bankForm/SEND':
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


