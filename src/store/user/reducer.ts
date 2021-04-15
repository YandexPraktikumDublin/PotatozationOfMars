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
import { TUserActions } from './fetchUser/types'
import { TUpdateUserActions } from './updateUser/types'
import { TUpdateAvatarActions } from './updateAvatar/types'
import { TUpdatePasswordActions } from './updatePassword/types'
import { IUserState } from './types'
import { normalizeUser } from '@utils/user'

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

export default (state = initialState, action: TCommonAction): IUserState => {
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
    case UPDATE_USER_SUCCESS:
    case UPDATE_AVATAR_SUCCESS:
      return {
        ...state,
        pending: false,
        user: normalizeUser(action.payload?.user),
        error: null
      }
    case UPDATE_PASSWORD_SUCCESS:
      return <IUserState>{
        ...state,
        user: {
          ...state.user
        },
        pending: false
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
      return state
  }
}
