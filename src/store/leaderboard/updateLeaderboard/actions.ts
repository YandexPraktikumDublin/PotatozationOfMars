import {
  UPDATE_LEADERBOARD_REQUEST,
  UPDATE_LEADERBOARD_SUCCESS,
  UPDATE_LEADERBOARD_FAILURE
} from './actionTypes'
import {
  TUpdateLeaderboardRequest,
  IUpdateLeaderboardRequestPayload,
  TUpdateLeaderboardSuccess,
  IUpdateLeaderboardSuccessPayload,
  TUpdateLeaderboardFailure,
  IUpdateLeaderboardFailurePayload
} from './types'

export const updateLeaderboardRequest = (
  payload: IUpdateLeaderboardRequestPayload
): TUpdateLeaderboardRequest => ({
  type: UPDATE_LEADERBOARD_REQUEST,
  payload
})

export const updateLeaderboardSuccess = (
  payload: IUpdateLeaderboardSuccessPayload
): TUpdateLeaderboardSuccess => ({
  type: UPDATE_LEADERBOARD_SUCCESS,
  payload
})

export const updateLeaderboardFailure = (
  payload: IUpdateLeaderboardFailurePayload
): TUpdateLeaderboardFailure => ({
  type: UPDATE_LEADERBOARD_FAILURE,
  payload
})
