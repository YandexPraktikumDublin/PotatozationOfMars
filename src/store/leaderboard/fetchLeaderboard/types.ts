import {
  FETCH_LEADERBOARD_REQUEST,
  FETCH_LEADERBOARD_SUCCESS,
  FETCH_LEADERBOARD_FAILURE
} from './actionTypes'
import { ILeader } from '@types'

export interface ILeaderboardState {
  pending: boolean
  leaderboard: ILeader[]
  error: string | null
}

export interface IFetchLeaderboardRequestPayload {
  ratingFieldName?: string
  cursor: number
  limit?: number
}

export interface IFetchLeaderboardSuccessPayload {
  leaderboard: ILeader[]
}

export interface IFetchLeaderboardFailurePayload {
  error: string
}

export type TFetchLeaderboardRequest = {
  type: typeof FETCH_LEADERBOARD_REQUEST
  payload: IFetchLeaderboardRequestPayload
}

export type TFetchLeaderboardSuccess = {
  type: typeof FETCH_LEADERBOARD_SUCCESS
  payload: IFetchLeaderboardSuccessPayload
}

export type TFetchLeaderboardFailure = {
  type: typeof FETCH_LEADERBOARD_FAILURE
  payload: IFetchLeaderboardFailurePayload
}

export type TLeaderboardActions =
  | TFetchLeaderboardRequest
  | TFetchLeaderboardSuccess
  | TFetchLeaderboardFailure
