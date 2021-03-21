import {
  FETCH_LEADERBOARD_REQUEST,
  FETCH_LEADERBOARD_SUCCESS,
  FETCH_LEADERBOARD_FAILURE
} from './fetchLeaderboard/actionTypes'
import {
  TLeaderboardActions,
  ILeaderboardState
} from './fetchLeaderboard/types'

type TCommonAction = TLeaderboardActions

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
    case FETCH_LEADERBOARD_FAILURE:
      return {
        ...state,
        pending: false,
        leaderboard: [],
        error: action.payload.error
      }
    default:
      return {
        ...state
      }
  }
}
