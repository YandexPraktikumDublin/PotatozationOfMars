import {
  FETCH_SERVICE_ID_FAILURE,
  FETCH_SERVICE_ID_REQUEST,
  FETCH_SERVICE_ID_SUCCESS
} from '@store/oauth/fetchServiceID/actionTypes'
import {
  IFetchServiceIDFailurePayload,
  IFetchServiceIDSuccessPayload,
  TFetchServiceIDFailure,
  TFetchServiceIDRequest,
  TFetchServiceIDSuccess
} from '@store/oauth/fetchServiceID/types'

export const fetchServiceIDRequest = (): TFetchServiceIDRequest => ({
  type: FETCH_SERVICE_ID_REQUEST
})

export const fetchServiceIDSuccess = (
  payload: IFetchServiceIDSuccessPayload
): TFetchServiceIDSuccess => ({
  type: FETCH_SERVICE_ID_SUCCESS,
  payload
})

export const fetchServiceIDFailure = (
  payload: IFetchServiceIDFailurePayload
): TFetchServiceIDFailure => ({
  type: FETCH_SERVICE_ID_FAILURE,
  payload
})
