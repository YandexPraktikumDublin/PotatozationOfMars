import {
  FETCH_USER_REQUEST,
  FETCH_USER_FAILURE,
  FETCH_USER_SUCCESS
} from './actionTypes'
import {
  TFetchUserRequest,
  TFetchUserSuccess,
  IFetchUserSuccessPayload,
  TFetchUserFailure,
  IFetchUserFailurePayload
} from './types'

export const fetchUserRequest = (): TFetchUserRequest => ({
  type: FETCH_USER_REQUEST
})

export const fetchUserSuccess = (
  payload: IFetchUserSuccessPayload
): TFetchUserSuccess => ({
  type: FETCH_USER_SUCCESS,
  payload
})

export const fetchUserFailure = (
  payload: IFetchUserFailurePayload
): TFetchUserFailure => ({
  type: FETCH_USER_FAILURE,
  payload
})
