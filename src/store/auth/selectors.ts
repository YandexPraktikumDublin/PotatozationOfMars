import { createSelector } from 'reselect'
import { AppState } from '@store/rootReducer'

const getPending = (state: AppState) => state.auth.pending

const getUserId = (state: AppState) => state.auth.userId

const getError = (state: AppState) => state.auth.error

export const getAuthPendingSelector = createSelector(
  getPending,
  (pending) => pending
)

export const getUserIdSelector = createSelector(getUserId, (userId) => userId)

export const getAuthErrorSelector = createSelector(
  getError,
  (error) => error ?? ''
)
