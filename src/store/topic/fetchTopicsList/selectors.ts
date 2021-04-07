import { createSelector } from 'reselect'
import { IAppState } from '@types'

const getPending = (state: IAppState) => state.topics.pending

const getTopic = (state: IAppState) => state.topics.topics

const getError = (state: IAppState) => state.topics.error

export const getTopicPendingSelector = createSelector(
  getPending,
  (pending) => pending
)

export const getTopicSelector = createSelector(getTopic, (topics) => topics)

export const getTopicErrorSelector = createSelector(getError, (error) => error)
