import { createSelector } from 'reselect'
import { IAppState } from '@types'

const getPending = (state: IAppState) => state.reaction.pending

const getReaction = (state: IAppState) => state.reaction.reaction

const getError = (state: IAppState) => state.reaction.error

export const getReactionPendingSelector = createSelector(
  getPending,
  (pending) => pending
)

export const getReactionSelector = createSelector(
  getReaction,
  (reaction) => reaction
)

export const getReactionErrorSelector = createSelector(
  getError,
  (error) => error
)
