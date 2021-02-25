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
import { TUserActions, IUserState } from './fetchUser/types'
import { TUpdateUserActions } from './updateUser/types'
import { TUpdateAvatarActions } from './updateAvatar/types'

type TCommonAction = TUserActions | TUpdateUserActions | TUpdateAvatarActions

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
      return {
        ...state,
        pending: true
      }
    case FETCH_USER_SUCCESS:
      return {
        ...state,
        pending: false,
        user: {
          id: action.payload.user?.id,
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
    case FETCH_USER_FAILURE:
      return {
        ...state,
        pending: false,
        user: null,
        error: action.payload.error
      }
    case UPDATE_USER_SUCCESS:
      return {
        ...state,
        pending: false,
        user: {
          ...state.user,
          firstName: action.payload?.first_name ?? '',
          secondName: action.payload?.second_name ?? '',
          displayName: action.payload?.display_name ?? '',
          login: action.payload?.login ?? '',
          email: action.payload?.email ?? '',
          phone: action.payload?.phone ?? ''
        },
        error: null
      }
    case UPDATE_USER_FAILURE:
      return {
        ...state,
        pending: false,
        user: null,
        error: action.payload.error
      }
    case UPDATE_AVATAR_SUCCESS:
      return {
        ...state,
        pending: false
      }
    case UPDATE_AVATAR_FAILURE:
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
