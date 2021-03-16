import { createSelector } from 'reselect'
import { IAppState } from '@types'

const getPending = (state: IAppState) => state.user.pending

const getUser = (state: IAppState) => state.user.user

const getError = (state: IAppState) => state.user.error

export const getUserPendingSelector = createSelector(
  getPending,
  (pending) => pending
)

export const getUserSelector = createSelector(getUser, (user) => user)

export const getUserErrorSelector = createSelector(getError, (error) => error)
