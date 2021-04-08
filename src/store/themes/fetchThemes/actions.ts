import {
  FETCH_THEMES_REQUEST,
  FETCH_THEMES_SUCCESS,
  FETCH_THEMES_FAILURE
} from './actionTypes'
import {
  IFetchThemesSuccessPayload,
  IFetchThemesFailurePayload,
  TFetchThemesRequest,
  TFetchThemesSuccess,
  TFetchThemesFailure
} from './types'

export const fetchThemesRequest = (): TFetchThemesRequest => ({
  type: FETCH_THEMES_REQUEST
})

export const fetchThemesSuccess = (
  payload: IFetchThemesSuccessPayload
): TFetchThemesSuccess => ({
  type: FETCH_THEMES_SUCCESS,
  payload
})

export const fetchThemesFailure = (
  payload: IFetchThemesFailurePayload
): TFetchThemesFailure => ({
  type: FETCH_THEMES_FAILURE,
  payload
})
