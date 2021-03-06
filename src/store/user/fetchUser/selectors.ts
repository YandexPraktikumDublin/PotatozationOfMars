import { createSelector } from 'reselect'
import { AppState } from '@store/rootReducer'

const getPending = (state: AppState) => state.user.pending

const getUser = (state: AppState) => state.user.user

const getError = (state: AppState) => state.user.error

export const getUserPendingSelector = createSelector(
  getPending,
  (pending) => pending
)

export const getUserSelector = createSelector(getUser, (user) => user)

export const getUserErrorSelector = createSelector(getError, (error) => error)
