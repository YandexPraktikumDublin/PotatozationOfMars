import {
  FETCH_LEADERBOARD_REQUEST,
  FETCH_LEADERBOARD_SUCCESS,
  FETCH_LEADERBOARD_FAILURE
} from './fetchLeaderboard/actionTypes'
import {
  UPDATE_LEADERBOARD_REQUEST,
  UPDATE_LEADERBOARD_SUCCESS,
  UPDATE_LEADERBOARD_FAILURE
} from './updateLeaderboard/actionTypes'
import {
  TLeaderboardActions,
  ILeaderboardState
} from './fetchLeaderboard/types'
import { TUpdateLeaderboardActions } from './updateLeaderboard/types'

type TCommonAction = TLeaderboardActions | TUpdateLeaderboardActions

const initialState: ILeaderboardState = {
  pending: false,
  leaderboard: [],
  error: null
}

export default (
  state = initialState,
  action: TCommonAction
): ILeaderboardState => {
  switch (action.type) {
    case FETCH_LEADERBOARD_REQUEST:
    case UPDATE_LEADERBOARD_REQUEST:
      return {
        ...state,
        pending: true
      }
    case FETCH_LEADERBOARD_SUCCESS:
      return {
        ...state,
        pending: false,
        leaderboard: action.payload?.leaderboard,
        error: null
      }
    case UPDATE_LEADERBOARD_SUCCESS:
      return {
        ...state,
        pending: false,
        error: null
      }
    case FETCH_LEADERBOARD_FAILURE:
    case UPDATE_LEADERBOARD_FAILURE:
      return {
        ...state,
        pending: false,
        leaderboard: [],
        error: action.payload.error
      }
    default:
      return state
  }
}
