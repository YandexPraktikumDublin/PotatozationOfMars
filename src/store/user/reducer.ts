import {
  FETCH_USER_REQUEST,
  FETCH_USER_SUCCESS,
  FETCH_USER_FAILURE
} from './fetchUser/actionTypes'
import {
  UPDATE_USER_REQUEST,
  UPDATE_USER_SUCCESS,
  UPDATE_USER_FAILURE
} from './updateUser/actionTypes'
import {
  UPDATE_AVATAR_REQUEST,
  UPDATE_AVATAR_SUCCESS,
  UPDATE_AVATAR_FAILURE
} from './updateAvatar/actionTypes'
import {
  UPDATE_PASSWORD_REQUEST,
  UPDATE_PASSWORD_SUCCESS,
  UPDATE_PASSWORD_FAILURE
} from './updatePassword/actionTypes'
import { TUserActions, IUserState } from './fetchUser/types'
import { TUpdateUserActions } from './updateUser/types'
import { TUpdateAvatarActions } from './updateAvatar/types'
import { TUpdatePasswordActions } from './updatePassword/types'

type TCommonAction =
  | TUserActions
  | TUpdateUserActions
  | TUpdateAvatarActions
  | TUpdatePasswordActions

const initialState: IUserState = {
  pending: false,
  user: null,
  error: null
}

export default (state = initialState, action: TCommonAction) => {
  switch (action.type) {
    case FETCH_USER_REQUEST:
    case UPDATE_USER_REQUEST:
    case UPDATE_AVATAR_REQUEST:
    case UPDATE_PASSWORD_REQUEST:
      return {
        ...state,
        pending: true
      }
    case FETCH_USER_SUCCESS:
      return {
        ...state,
        pending: false,
        user: {
          id: action.payload?.user?.id,
          firstName: action.payload?.user?.first_name ?? '',
          secondName: action.payload?.user?.second_name ?? '',
          displayName: action.payload?.user?.display_name ?? '',
          login: action.payload?.user?.login ?? '',
          email: action.payload?.user?.email ?? '',
          phone: action.payload?.user?.phone ?? '',
          avatar: action.payload?.user?.avatar ?? ''
        },
        error: null
      }
    case UPDATE_USER_SUCCESS:
      return {
        ...state,
        pending: false,
        user: {
          ...state.user,
          firstName: action.payload?.user?.first_name ?? '',
          secondName: action.payload?.user?.second_name ?? '',
          displayName: action.payload?.user?.display_name ?? '',
          login: action.payload?.user?.login ?? '',
          email: action.payload?.user?.email ?? '',
          phone: action.payload?.user?.phone ?? ''
        },
        error: null
      }
    case UPDATE_AVATAR_SUCCESS:
      return {
        ...state,
        pending: false,
        user: {
          ...state.user,
          avatar: action?.payload?.user?.avatar ?? ''
        }
      }
    case UPDATE_PASSWORD_SUCCESS:
      return {
        ...state,
        pending: false,
        user: {
          ...state.user
        }
      }
    case FETCH_USER_FAILURE:
      return {
        ...state,
        pending: false,
        user: null,
        error: action.payload.error
      }
    case UPDATE_USER_FAILURE:
    case UPDATE_AVATAR_FAILURE:
    case UPDATE_PASSWORD_FAILURE:
      return {
        ...state,
        pending: false,
        error: action.payload.error
      }
    default:
      return {
        ...state
      }
  }
}
