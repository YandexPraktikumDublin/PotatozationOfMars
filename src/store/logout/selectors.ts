import { createSelector } from 'reselect'
import { IAppState } from '@types'

const getPending = (state: IAppState) => state.logout.pending

const getError = (state: IAppState) => state.logout.error

export const getLogoutPendingSelector = createSelector(
  getPending,
  (pending) => pending
)

export const getLogoutErrorSelector = createSelector(
  getError,
  (error) => error ?? ''
)
