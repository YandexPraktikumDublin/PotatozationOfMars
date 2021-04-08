import {
  FETCH_USER_SETTINGS_FAILURE,
  FETCH_USER_SETTINGS_REQUEST,
  FETCH_USER_SETTINGS_SUCCESS
} from './fetchUserSettings/actionTypes'
import {
  UPDATE_USER_SETTINGS_FAILURE,
  UPDATE_USER_SETTINGS_REQUEST,
  UPDATE_USER_SETTINGS_SUCCESS
} from '@store/userSettings/updateUserSettings/actionTypes'
import { TFetchUserSettingsActions } from './fetchUserSettings/types'
import { TUpdateUserSettingsActions } from './updateUserSettings/types'
import { IUserSettingsState } from './types'
import {
  CREATE_USER_SETTINGS_FAILURE,
  CREATE_USER_SETTINGS_REQUEST,
  CREATE_USER_SETTINGS_SUCCESS
} from '@store/userSettings/createUserSettings/actionTypes'
import { TCreateUserSettingsActions } from '@store/userSettings/createUserSettings/types'

type TCommonAction =
  | TFetchUserSettingsActions
  | TCreateUserSettingsActions
  | TUpdateUserSettingsActions

const initialState: IUserSettingsState = {
  pending: false,
  userSettings: null,
  error: null
}

export default (
  state = initialState,
  action: TCommonAction
): IUserSettingsState => {
  switch (action.type) {
    case FETCH_USER_SETTINGS_REQUEST:
    case CREATE_USER_SETTINGS_REQUEST:
    case UPDATE_USER_SETTINGS_REQUEST:
      return {
        ...state,
        pending: true
      }
    case FETCH_USER_SETTINGS_SUCCESS:
    case CREATE_USER_SETTINGS_SUCCESS:
    case UPDATE_USER_SETTINGS_SUCCESS:
      return {
        ...state,
        pending: false,
        userSettings: action.payload.userSettings,
        error: null
      }
    case FETCH_USER_SETTINGS_FAILURE:
    case CREATE_USER_SETTINGS_FAILURE:
    case UPDATE_USER_SETTINGS_FAILURE:
      return {
        ...state,
        pending: false,
        userSettings: null,
        error: action.payload.error
      }
    default:
      return {
        ...state
      }
  }
}
