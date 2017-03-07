
const SET_BUDGET = 'budget/SET_BUDGET'


// ACTION CREATORS (there may be more than one; one for each action type)
export const setBudget = value => ({
  type: SET_BUDGET,
  value: parseFloat(value)
})

// INITIAL VALUE
const initialState = {
  initialPrice: 0,
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

    default:
      return state
  }
}

export default budgetReducer