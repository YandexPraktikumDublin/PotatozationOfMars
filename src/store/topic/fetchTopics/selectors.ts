import { createSelector } from 'reselect'
import { IAppState } from '@types'

const getPending = (state: IAppState) => state.topics.pending

const getTopics = (state: IAppState) => state.topics.topics

const getError = (state: IAppState) => state.topics.error

export const getTopicsPendingSelector = createSelector(
  getPending,
  (pending) => pending
)

export const getTopicsSelector = createSelector(getTopics, (topics) => topics)

export const getTopicsErrorSelector = createSelector(getError, (error) => error)
