import { UPDATE_COUNTER } from './types'

export const updateCounter = counter => ({ type: UPDATE_COUNTER, payload: counter })
