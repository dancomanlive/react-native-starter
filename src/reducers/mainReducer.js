import { UPDATE_COUNTER } from '../actions/types'

const INITIAL_STATE = {
  counter: 11
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case UPDATE_COUNTER:
    return { ...state, counter: action.payload }
  default:
    return state
  }
}
