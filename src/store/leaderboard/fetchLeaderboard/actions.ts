import {
  FETCH_LEADERBOARD_REQUEST,
  FETCH_LEADERBOARD_SUCCESS,
  FETCH_LEADERBOARD_FAILURE
} from './actionTypes'
import {
  TFetchLeaderboardRequest,
  IFetchLeaderboardRequestPayload,
  TFetchLeaderboardSuccess,
  IFetchLeaderboardSuccessPayload,
  TFetchLeaderboardFailure,
  IFetchLeaderboardFailurePayload
} from './types'

export const fetchLeaderboardRequest = (
  payload: IFetchLeaderboardRequestPayload
): TFetchLeaderboardRequest => ({
  type: FETCH_LEADERBOARD_REQUEST,
  payload
})

export const fetchLeaderboardSuccess = (
  payload: IFetchLeaderboardSuccessPayload
): TFetchLeaderboardSuccess => ({
  type: FETCH_LEADERBOARD_SUCCESS,
  payload
})

export const fetchLeaderboardFailure = (
  payload: IFetchLeaderboardFailurePayload
): TFetchLeaderboardFailure => ({
  type: FETCH_LEADERBOARD_FAILURE,
  payload
})
