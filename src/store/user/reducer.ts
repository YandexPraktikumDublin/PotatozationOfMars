import {
  FETCH_USER_REQUEST,
  FETCH_USER_SUCCESS,
  FETCH_USER_FAILURE
} from './actionTypes'

import { TUserActions, IUserState } from './types'

const initialState: IUserState = {
  pending: false,
  user: null,
  error: null
}

export default (state = initialState, action: TUserActions) => {
  switch (action.type) {
    case FETCH_USER_REQUEST:
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
    default:
      return {
        ...state
      }
  }
}
