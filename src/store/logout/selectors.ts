import { createSelector } from 'reselect'
import { AppState } from '@store/rootReducer'

const getPending = (state: AppState) => state.logout.pending

const getError = (state: AppState) => state.logout.error

export const getLogoutPendingSelector = createSelector(
  getPending,
  (pending) => pending
)

export const getLogoutErrorSelector = createSelector(
  getError,
  (error) => error ?? ''
)
