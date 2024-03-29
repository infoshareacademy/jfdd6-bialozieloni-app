const FETCH__BEGIN = 'user/FETCH__BEGIN'
const FETCH__SUCCESS = 'user/FETCH__SUCCESS'
const FETCH__FAIL = 'user/FETCH__FAILED'

import { setTotalCapital } from './budget'

export const saveUserBudget = value => (dispatch, setState) => {
  const accessToken = setState().session.data.id
  const userId = setState().session.data.userId

  dispatch({ type: 'user/SET_BUDGET_FETCH', value, accessToken, userId })

}

export const fetchUser = (accessToken, userId) => dispatch => {
  dispatch({ type: FETCH__BEGIN })
  return fetch(
    'https://tranquil-ocean-17204.herokuapp.com/api/users/' + userId + '?access_token=' + accessToken
  ).then(
    response => {
      if (response.ok) {
        return response.json().then(
          data => {
            dispatch({
              type: FETCH__SUCCESS,
              data
            })
            dispatch(setTotalCapital(data.totalCapital))
          }
        ).catch(
          error => dispatch({
            type: FETCH__FAIL,
            error: 'Malformed JSON response'
          })
        )
      }
      throw new Error('Connection error')
    }
  ).catch(
    error => dispatch({
      type: FETCH__FAIL,
      error: error.message
    })
  )
}

const initialState = {
  data: null,
  fetching: false,
  error: null
}

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case FETCH__BEGIN:
      return {
        ...state,
        fetching: true,
        error: null
      }
    case FETCH__SUCCESS:
      return {
        ...state,
        data: action.data,
        fetching: false
      }
    case FETCH__FAIL:
      return {
        ...state,
        fetching: false,
        error: action.error
      }
    default:
      return state
  }
}