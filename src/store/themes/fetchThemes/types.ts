import {
  FETCH_THEMES_REQUEST,
  FETCH_THEMES_SUCCESS,
  FETCH_THEMES_FAILURE
} from './actionTypes'
import { ITheme } from '@models'

export interface IFetchThemesSuccessPayload {
  themes: ITheme[]
}

export interface IFetchThemesFailurePayload {
  error: string
}

export type TFetchThemesRequest = {
  type: typeof FETCH_THEMES_REQUEST
}

export type TFetchThemesSuccess = {
  type: typeof FETCH_THEMES_SUCCESS
  payload: IFetchThemesSuccessPayload
}

export type TFetchThemesFailure = {
  type: typeof FETCH_THEMES_FAILURE
  payload: IFetchThemesFailurePayload
}

export type TFetchThemesActions =
  | TFetchThemesRequest
  | TFetchThemesSuccess
  | TFetchThemesFailure
