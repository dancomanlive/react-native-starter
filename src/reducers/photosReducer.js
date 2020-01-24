import { FETCH_PHOTOS, DELETE_ITEM } from '../actions/types'

export default (state = [], action) => {
  switch (action.type) {
  case FETCH_PHOTOS:
    return action.payload
  case DELETE_ITEM:
    return action.payload
  default:
    return state
  }
}
