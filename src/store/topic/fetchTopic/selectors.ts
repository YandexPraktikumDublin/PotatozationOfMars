import { createSelector } from 'reselect'
import { IAppState } from '@types'

const getPending = (state: IAppState) => state.topic.pending

const getUser = (state: IAppState) => state.topic.topic

const getError = (state: IAppState) => state.topic.error

export const getUserPendingSelector = createSelector(
  getPending,
  (pending) => pending
)

export const getUserSelector = createSelector(getUser, (topic) => topic)

export const getUserErrorSelector = createSelector(getError, (error) => error)
