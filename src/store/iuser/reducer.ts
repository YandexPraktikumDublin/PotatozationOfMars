import {
  CREATE_IUSER_REQUEST,
  CREATE_IUSER_SUCCESS,
  CREATE_IUSER_FAILURE
} from './createIUser/actionTypes'
import {
  FETCH_IUSER_REQUEST,
  FETCH_IUSER_SUCCESS,
  FETCH_IUSER_FAILURE
} from './fetchIUser/actionTypes'
import {
  UPDATE_IUSER_REQUEST,
  UPDATE_IUSER_SUCCESS,
  UPDATE_IUSER_FAILURE
} from './updateIUser/actionTypes'
import {
  UPDATE_IUSER_PASSWORD_REQUEST,
  UPDATE_IUSER_PASSWORD_SUCCESS,
  UPDATE_IUSER_PASSWORD_FAILURE
} from './updateIUserPassword/actionTypes'
import {
  SIGNIN_IUSER_REQUEST,
  SIGNIN_IUSER_SUCCESS,
  SIGNIN_IUSER_FAILURE
} from './signinIUser/actionTypes'
import {
  LOGOUT_IUSER_REQUEST,
  LOGOUT_IUSER_SUCCESS,
  LOGOUT_IUSER_FAILURE
} from './logoutIUser/actionTypes'

import { TCreateIUserActions } from './createIUser/types'
import { TIUserActions } from './fetchIUser/types'
import { TUpdateIUserActions } from './updateIUser/types'
import { TUpdateIUserPasswordActions } from './updateIUserPassword/types'
import { TSigninIUserActions } from './signinIUser/types'
import { TLogoutIUserActions } from './logoutIUser/types'
import { IIUserState } from './types'

type TCommonAction =
  | TIUserActions
  | TCreateIUserActions
  | TUpdateIUserActions
  | TUpdateIUserPasswordActions
  | TSigninIUserActions
  | TLogoutIUserActions

const initialState: IIUserState = {
  pending: false,
  iuser: null,
  error: null
}

export default (state = initialState, action: TCommonAction): IIUserState => {
  switch (action.type) {
    case CREATE_IUSER_REQUEST:
    case FETCH_IUSER_REQUEST:
    case UPDATE_IUSER_REQUEST:
    case UPDATE_IUSER_PASSWORD_REQUEST:
    case SIGNIN_IUSER_REQUEST:
    case LOGOUT_IUSER_REQUEST:
      return {
        ...state,
        pending: true
      }
    case CREATE_IUSER_SUCCESS:
    case FETCH_IUSER_SUCCESS:
    case UPDATE_IUSER_SUCCESS:
    case UPDATE_IUSER_PASSWORD_SUCCESS:
    case SIGNIN_IUSER_SUCCESS:
      return {
        ...state,
        pending: false,
        iuser: action.payload?.iuser,
        error: null
      }
    case LOGOUT_IUSER_SUCCESS:
      return {
        ...state,
        pending: false,
        iuser: null,
        error: null
      }
    case CREATE_IUSER_FAILURE:
    case FETCH_IUSER_FAILURE:
    case UPDATE_IUSER_FAILURE:
    case UPDATE_IUSER_PASSWORD_FAILURE:
    case SIGNIN_IUSER_FAILURE:
    case LOGOUT_IUSER_FAILURE:
      return {
        ...state,
        pending: false,
        error: action.payload.error
      }
    default:
      return state
  }
}
