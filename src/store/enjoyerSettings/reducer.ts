import {
  FETCH_ENJOYER_SETTINGS_FAILURE,
  FETCH_ENJOYER_SETTINGS_REQUEST,
  FETCH_ENJOYER_SETTINGS_SUCCESS
} from './fetchEnjoyerSettings/actionTypes'
import {
  UPDATE_ENJOYER_SETTINGS_FAILURE,
  UPDATE_ENJOYER_SETTINGS_REQUEST,
  UPDATE_ENJOYER_SETTINGS_SUCCESS
} from '@store/enjoyerSettings/updateEnjoyerSettings/actionTypes'
import { TFetchEnjoyerSettingsActions } from './fetchEnjoyerSettings/types'
import { TUpdateEnjoyerSettingsActions } from './updateEnjoyerSettings/types'
import { IEnjoyerSettingsState } from './types'
import {
  CREATE_ENJOYER_SETTINGS_FAILURE,
  CREATE_ENJOYER_SETTINGS_REQUEST,
  CREATE_ENJOYER_SETTINGS_SUCCESS
} from './createEnjoyerSettings/actionTypes'
import { TCreateEnjoyerSettingsActions } from './createEnjoyerSettings/types'

type TCommonAction =
  | TFetchEnjoyerSettingsActions
  | TCreateEnjoyerSettingsActions
  | TUpdateEnjoyerSettingsActions

const initialState: IEnjoyerSettingsState = {
  pending: false,
  enjoyerSettings: null,
  error: null
}

export default (
  state = initialState,
  action: TCommonAction
): IEnjoyerSettingsState => {
  switch (action.type) {
    case FETCH_ENJOYER_SETTINGS_REQUEST:
    case CREATE_ENJOYER_SETTINGS_REQUEST:
    case UPDATE_ENJOYER_SETTINGS_REQUEST:
      return {
        ...state,
        pending: true
      }
    case FETCH_ENJOYER_SETTINGS_SUCCESS:
    case CREATE_ENJOYER_SETTINGS_SUCCESS:
    case UPDATE_ENJOYER_SETTINGS_SUCCESS:
      return {
        ...state,
        pending: false,
        enjoyerSettings: action.payload.enjoyerSettings,
        error: null
      }
    case FETCH_ENJOYER_SETTINGS_FAILURE:
    case CREATE_ENJOYER_SETTINGS_FAILURE:
    case UPDATE_ENJOYER_SETTINGS_FAILURE:
      return {
        ...state,
        pending: false,
        enjoyerSettings: null,
        error: action.payload.error
      }
    default:
      return state
  }
}
