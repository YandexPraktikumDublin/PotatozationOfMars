import { DEFAULT_ERROR_MESSAGE } from '@config'
import { AUTH_REQUEST, AUTH_SUCCESS, AUTH_FAILURE } from './actionTypes'
import { TAuthActions, IAuthState } from './types'

const initialState: IAuthState = {
  pending: false,
  userId: null,
  error: null
}

export default (state = initialState, action: TAuthActions) => {
  switch (action.type) {
    case AUTH_REQUEST:
      return {
        ...state,
        pending: true
      }
    case AUTH_SUCCESS:
      return {
        ...state,
        pending: false,
        userId: action.payload.id,
        error: null
      }
    case AUTH_FAILURE:
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
