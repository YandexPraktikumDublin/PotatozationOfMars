import { createSelector } from 'reselect'
import { IAppState } from '@types'

const getPending = (state: IAppState) => state.leaderboard.pending

const getLeaderboard = (state: IAppState) => state.leaderboard.leaderboard

const getError = (state: IAppState) => state.leaderboard.error

export const getLeaderboardPendingSelector = createSelector(
  getPending,
  (pending) => pending
)

export const getLeaderboardSelector = createSelector(
  getLeaderboard,
  (leaderboard) => leaderboard
)

export const getLeaderboardErrorSelector = createSelector(
  getError,
  (error) => error
)
