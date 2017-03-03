
const initialState = {
 // radioData: radio,
 //  iloscData: ilosc,
 //  walorData: walor,
 //  limitData: limit
}

export default (state = initialState, action = {}) => {
  return {
    ...state,
    studentsQuantityLimit: Math.min(
      10,
      isNaN(parseInt(action.value)) ?
        0 : parseInt(action.value)
    )
  }}
