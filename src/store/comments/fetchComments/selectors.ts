import { createSelector } from 'reselect'
import { IAppState } from '@types'

const getPending = (state: IAppState) => state.comments.pending

const getComments = (state: IAppState) => state.comments.comments

const getError = (state: IAppState) => state.comments.error

export const getCommentsPendingSelector = createSelector(
  getPending,
  (pending) => pending
)

export const getCommentsSelector = createSelector(
  getComments,
  (comments) => comments
)

export const getCommentsErrorSelector = createSelector(
  getError,
  (error) => error
)
