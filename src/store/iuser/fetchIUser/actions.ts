import {
  FETCH_IUSER_REQUEST,
  FETCH_IUSER_SUCCESS,
  FETCH_IUSER_FAILURE
} from './actionTypes'
import {
  TFetchIUserRequest,
  TFetchIUserSuccess,
  IFetchIUserSuccessPayload,
  TFetchIUserFailure,
  IFetchIUserFailurePayload
} from './types'

export const fetchIUserRequest = (): TFetchIUserRequest => ({
  type: FETCH_IUSER_REQUEST
})

export const fetchIUserSuccess = (
  payload: IFetchIUserSuccessPayload
): TFetchIUserSuccess => ({
  type: FETCH_IUSER_SUCCESS,
  payload
})

export const fetchIUserFailure = (
  payload: IFetchIUserFailurePayload
): TFetchIUserFailure => ({
  type: FETCH_IUSER_FAILURE,
  payload
})
