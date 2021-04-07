import { createSelector } from 'reselect'
import { IAppState } from '@types'

const getPending = (state: IAppState) => state.topic.pending

const getTopic = (state: IAppState) => state.topic.topic

const getError = (state: IAppState) => state.topic.error

export const getTopicPendingSelector = createSelector(
  getPending,
  (pending) => pending
)

export const getTopicSelector = createSelector(getTopic, (topic) => topic)

export const getTopicErrorSelector = createSelector(getError, (error) => error)
