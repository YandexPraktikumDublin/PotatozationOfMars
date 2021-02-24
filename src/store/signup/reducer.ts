import { DEFAULT_ERROR_MESSAGE } from '@config'
import { SIGNUP_REQUEST, SIGNUP_SUCCESS, SIGNUP_FAILURE } from './actionTypes'
import { TSignupActions, ISignupState } from './types'

const initialState: ISignupState = {
  pending: false,
  userId: null,
  error: null
}

export default (state = initialState, action: TSignupActions) => {
  switch (action.type) {
    case SIGNUP_REQUEST:
      return {
        ...state,
        pending: true
      }
    case SIGNUP_SUCCESS:
      return {
        ...state,
        pending: false,
        userId: action.payload.id,
        error: null
      }
    case SIGNUP_FAILURE:
      return {
        ...state,
        pending: false,
        error: action.payload.error ?? DEFAULT_ERROR_MESSAGE
      }
    default:
      return {
        ...state
      }
  }
}
