import {
  FETCH_ENJOYER_REQUEST,
  FETCH_ENJOYER_SUCCESS,
  FETCH_ENJOYER_FAILURE
} from './actionTypes'
import {
  TFetchEnjoyerRequest,
  TFetchEnjoyerSuccess,
  IFetchEnjoyerSuccessPayload,
  TFetchEnjoyerFailure,
  IFetchEnjoyerFailurePayload
} from './types'

export const fetchEnjoyerRequest = (): TFetchEnjoyerRequest => ({
  type: FETCH_ENJOYER_REQUEST
})

export const fetchEnjoyerSuccess = (
  payload: IFetchEnjoyerSuccessPayload
): TFetchEnjoyerSuccess => ({
  type: FETCH_ENJOYER_SUCCESS,
  payload
})

export const fetchEnjoyerFailure = (
  payload: IFetchEnjoyerFailurePayload
): TFetchEnjoyerFailure => ({
  type: FETCH_ENJOYER_FAILURE,
  payload
})
