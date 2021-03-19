import {
  FETCH_SERVICE_ID_REQUEST,
  FETCH_SERVICE_ID_SUCCESS,
  FETCH_SERVICE_ID_FAILURE
} from './actionTypes'

export interface IFetchServiceIDSuccessPayload {
  // eslint-disable-next-line camelcase
  service_id: number
}

export interface IFetchServiceIDFailurePayload {
  error: string
}

export type TFetchServiceIDRequest = {
  type: typeof FETCH_SERVICE_ID_REQUEST
}

export type TFetchServiceIDSuccess = {
  type: typeof FETCH_SERVICE_ID_SUCCESS
  payload: IFetchServiceIDSuccessPayload
}

export type TFetchServiceIDFailure = {
  type: typeof FETCH_SERVICE_ID_FAILURE
  payload: IFetchServiceIDFailurePayload
}

export type TServiceIDActions =
  | TFetchServiceIDRequest
  | TFetchServiceIDSuccess
  | TFetchServiceIDFailure
