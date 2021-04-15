import { createSelector } from 'reselect'
import { IAppState } from '@types'

const getPending = (state: IAppState) => state.reactions.pending

const getReactions = (state: IAppState) => state.reactions.reactions

const getError = (state: IAppState) => state.reactions.error

export const getReactionsPendingSelector = createSelector(
  getPending,
  (pending) => pending
)

export const getReactionsSelector = createSelector(
  getReactions,
  (reactions) => reactions
)

export const getReactionsErrorSelector = createSelector(
  getError,
  (error) => error
)
