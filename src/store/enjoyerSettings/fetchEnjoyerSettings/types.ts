import {
  FETCH_ENJOYER_SETTINGS_REQUEST,
  FETCH_ENJOYER_SETTINGS_SUCCESS,
  FETCH_ENJOYER_SETTINGS_FAILURE
} from './actionTypes'
import { IEnjoyerSettings } from '@models'

export interface IFetchEnjoyerSettingsSuccessPayload {
  enjoyerSettings: IEnjoyerSettings
}

export interface IFetchEnjoyerSettingsFailurePayload {
  error: string
}

export type TFetchEnjoyerSettingsRequest = {
  type: typeof FETCH_ENJOYER_SETTINGS_REQUEST
}

export type TFetchEnjoyerSettingsSuccess = {
  type: typeof FETCH_ENJOYER_SETTINGS_SUCCESS
  payload: IFetchEnjoyerSettingsSuccessPayload
}

export type TFetchEnjoyerSettingsFailure = {
  type: typeof FETCH_ENJOYER_SETTINGS_FAILURE
  payload: IFetchEnjoyerSettingsFailurePayload
}

export type TFetchEnjoyerSettingsActions =
  | TFetchEnjoyerSettingsRequest
  | TFetchEnjoyerSettingsSuccess
  | TFetchEnjoyerSettingsFailure
