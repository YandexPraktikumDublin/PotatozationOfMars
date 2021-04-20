import {
  CREATE_ENJOYER_REQUEST,
  CREATE_ENJOYER_SUCCESS,
  CREATE_ENJOYER_FAILURE
} from './createEnjoyer/actionTypes'
import {
  FETCH_ENJOYER_REQUEST,
  FETCH_ENJOYER_SUCCESS,
  FETCH_ENJOYER_FAILURE
} from './fetchEnjoyer/actionTypes'
import {
  UPDATE_ENJOYER_REQUEST,
  UPDATE_ENJOYER_SUCCESS,
  UPDATE_ENJOYER_FAILURE
} from './updateEnjoyer/actionTypes'
import {
  UPDATE_ENJOYER_PASSWORD_REQUEST,
  UPDATE_ENJOYER_PASSWORD_SUCCESS,
  UPDATE_ENJOYER_PASSWORD_FAILURE
} from './updateEnjoyerPassword/actionTypes'
import {
  SIGNIN_ENJOYER_REQUEST,
  SIGNIN_ENJOYER_SUCCESS,
  SIGNIN_ENJOYER_FAILURE
} from './signinEnjoyer/actionTypes'
import {
  LOGOUT_ENJOYER_REQUEST,
  LOGOUT_ENJOYER_SUCCESS,
  LOGOUT_ENJOYER_FAILURE
} from './logoutEnjoyer/actionTypes'

import { TCreateEnjoyerActions } from './createEnjoyer/types'
import { TEnjoyerActions } from './fetchEnjoyer/types'
import { TUpdateEnjoyerActions } from './updateEnjoyer/types'
import { TUpdateEnjoyerPasswordActions } from './updateEnjoyerPassword/types'
import { TSigninEnjoyerActions } from './signinEnjoyer/types'
import { TLogoutEnjoyerActions } from './logoutEnjoyer/types'
import { IEnjoyerState } from './types'

type TCommonAction =
  | TEnjoyerActions
  | TCreateEnjoyerActions
  | TUpdateEnjoyerActions
  | TUpdateEnjoyerPasswordActions
  | TSigninEnjoyerActions
  | TLogoutEnjoyerActions

const initialState: IEnjoyerState = {
  pending: false,
  enjoyer: null,
  error: null
}

export default (state = initialState, action: TCommonAction): IEnjoyerState => {
  switch (action.type) {
    case CREATE_ENJOYER_REQUEST:
    case FETCH_ENJOYER_REQUEST:
    case UPDATE_ENJOYER_REQUEST:
    case UPDATE_ENJOYER_PASSWORD_REQUEST:
    case SIGNIN_ENJOYER_REQUEST:
    case LOGOUT_ENJOYER_REQUEST:
      return {
        ...state,
        pending: true
      }
    case CREATE_ENJOYER_SUCCESS:
    case FETCH_ENJOYER_SUCCESS:
    case UPDATE_ENJOYER_SUCCESS:
    case UPDATE_ENJOYER_PASSWORD_SUCCESS:
    case SIGNIN_ENJOYER_SUCCESS:
      return {
        ...state,
        pending: false,
        enjoyer: action.payload?.enjoyer,
        error: null
      }
    case LOGOUT_ENJOYER_SUCCESS:
      return {
        ...state,
        pending: false,
        enjoyer: null,
        error: null
      }
    case CREATE_ENJOYER_FAILURE:
    case FETCH_ENJOYER_FAILURE:
    case UPDATE_ENJOYER_FAILURE:
    case UPDATE_ENJOYER_PASSWORD_FAILURE:
    case SIGNIN_ENJOYER_FAILURE:
    case LOGOUT_ENJOYER_FAILURE:
      return {
        ...state,
        pending: false,
        error: action.payload.error
      }
    default:
      return state
  }
}
