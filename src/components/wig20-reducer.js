const Wig20Reducer = (state = {}, action = {}) => {

  switch(action.type) {

    case 'formSave':
      return {
        ...state,
        companies: action.value
      }
    default:
      return state

  }
}

export default Wig20Reducer



