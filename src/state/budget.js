const SET_BUDGET = 'budget/SET_BUDGET'
const SET_RETURN_RATE = 'budget/SET_RETURN_RATE'
const INCREASE_TOTAL_CAPITAL = 'budget/INCREASE_TOTAL_CAPITAL'
const CURRENT_BUDGET = 'budget/CURRENT_BUDGET'


// ACTION CREATORS (there may be more than one; one for each action type)
export const setBudget = (value, radioValue) => ({
  type: SET_BUDGET,
  value: parseFloat(value) || 0,
  radioValue: parseFloat(radioValue)
})

export const setReturnRate = value => ({
  type: SET_RETURN_RATE,
  value: parseFloat(value)
})

export const increaseTotalCapital = value => ({
  type: INCREASE_TOTAL_CAPITAL,
  value: parseFloat(value)
})

export const currentBudget = value => ({
  type: CURRENT_BUDGET,
  value: parseFloat(value)
})

// INITIAL VALUE
const initialState = {
  initialPrice: 0,
  returnRate: 0.0,
  totalCapital: 0,
  currentBudget: 0,

}


// REDUCER
const budgetReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    // Number of cases should be equal to number of action types
    case SET_BUDGET:
      return {
        ...state,
        initialPrice: action.value
      }
    case SET_RETURN_RATE:
      return {
        ...state,
        returnRate: action.value
      }
    case INCREASE_TOTAL_CAPITAL:
      return {
        ...state,
        initialPrice: 0,
        totalCapital: state.totalCapital + action.value
      }
      case CURRENT_BUDGET:
      return {
        ...state,
        totalCapital: state.currentBudget + action.value
      }

    default:
      return state
  }
}

export default budgetReducer