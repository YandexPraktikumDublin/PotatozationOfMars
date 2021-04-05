import {
  UPDATE_LEADERBOARD_REQUEST,
  UPDATE_LEADERBOARD_SUCCESS,
  UPDATE_LEADERBOARD_FAILURE
} from './actionTypes'
import { ILeader } from '@types'

export interface IUpdateLeaderboardRequestPayload extends ILeader {
  ratingFieldName?: string
}

export interface IUpdateLeaderboardSuccessPayload {}

export interface IUpdateLeaderboardFailurePayload {
  error: string
}

export type TUpdateLeaderboardRequest = {
  type: typeof UPDATE_LEADERBOARD_REQUEST
  payload: IUpdateLeaderboardRequestPayload
}

export type TUpdateLeaderboardSuccess = {
  type: typeof UPDATE_LEADERBOARD_SUCCESS
  payload: IUpdateLeaderboardSuccessPayload
}

export type TUpdateLeaderboardFailure = {
  type: typeof UPDATE_LEADERBOARD_FAILURE
  payload: IUpdateLeaderboardFailurePayload
}

export type TUpdateLeaderboardActions =
  | TUpdateLeaderboardRequest
  | TUpdateLeaderboardSuccess
  | TUpdateLeaderboardFailure
