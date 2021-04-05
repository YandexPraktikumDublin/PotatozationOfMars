import { createSelector } from 'reselect'
import { IAppState } from '@types'

const getPending = (state: IAppState) => state.signup.pending

const getUserId = (state: IAppState) => state.signup.userId

const getError = (state: IAppState) => state.signup.error

export const getSignupPendingSelector = createSelector(
  getPending,
  (pending) => pending
)

export const getUserIdSelector = createSelector(getUserId, (userId) => userId)

export const getSignupErrorSelector = createSelector(
  getError,
  (error) => error ?? ''
)
