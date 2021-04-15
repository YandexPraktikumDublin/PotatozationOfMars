import { DEFAULT_ERROR_MESSAGE } from '@config'
import { LOGOUT_REQUEST, LOGOUT_SUCCESS, LOGOUT_FAILURE } from './actionTypes'
import { TLogoutActions, ILogoutState } from './types'

const initialState: ILogoutState = {
  pending: false,
  error: null
}

export default (state = initialState, action: TLogoutActions) => {
  switch (action.type) {
    case LOGOUT_REQUEST:
      return {
        ...state,
        pending: true
      }
    case LOGOUT_SUCCESS:
      return {
        pending: false,
        error: null
      }
    case LOGOUT_FAILURE:
      return {
        ...state,
        pending: false,
        error: action.payload.error ?? DEFAULT_ERROR_MESSAGE
      }
    default:
      return state
  }
}
