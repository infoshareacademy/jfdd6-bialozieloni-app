const initialState = {
  objectValue: [{
    radioValue: 'Kupno',
    iloscValue: 'wpisz ilość',
    selectValue: 'ALIOR',
    limitValue: 'wpisz limit'
  }]
}

const bankReducer = (state = initialState, action = {}) => {

  let objectValue = state.objectValue;
  if( Array.isArray( objectValue ) !== true){
    objectValue = [{}];
  }

  switch(action.type) {
    case 'bankForm/RADIO':
      objectValue[ objectValue.length - 1 ]['radioValue'] = action.value;
      return {
        ...state,
        objectValue: objectValue
      }
    case 'bankForm/ILOSC':
      objectValue[ objectValue.length - 1 ]['iloscValue'] = action.value;
      return {
        ...state,
        objectValue: objectValue
      }
    case 'bankForm/SELECT':
      objectValue[ objectValue.length - 1 ]['selectValue'] = action.value;
      return {
        ...state,
        objectValue: objectValue
      }
    case 'bankForm/LIMIT':
      objectValue[ objectValue.length - 1 ]['limitValue'] = action.value;
      return {
        ...state,
        objectValue: objectValue
      }
    case 'bankForm/SEND':
      objectValue.push({});
      return {
        ...state,
        objectValue: objectValue
      }
    default:
      return state
  }
}

export default bankReducer


//reducer


