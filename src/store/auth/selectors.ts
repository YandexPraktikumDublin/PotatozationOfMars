import { createSelector } from 'reselect'
import { IAppState } from '@types'

const getPending = (state: IAppState) => state.auth.pending

const getUserId = (state: IAppState) => state.auth.userId

const getError = (state: IAppState) => state.auth.error

export const getAuthPendingSelector = createSelector(
  getPending,
  (pending) => pending
)

export const getUserIdSelector = createSelector(getUserId, (userId) => userId)

export const getAuthErrorSelector = createSelector(
  getError,
  (error) => error ?? ''
)
