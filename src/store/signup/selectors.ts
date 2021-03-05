import { createSelector } from 'reselect'
import { AppState } from '@store/rootReducer'

const getPending = (state: AppState) => state.signup.pending

const getUserId = (state: AppState) => state.signup.userId

const getError = (state: AppState) => state.signup.error

export const getSignupPendingSelector = createSelector(
  getPending,
  (pending) => pending
)

export const getUserIdSelector = createSelector(getUserId, (userId) => userId)

export const getSignupErrorSelector = createSelector(
  getError,
  (error) => error ?? ''
)
